/**
 * Thumbnail Generator Script
 * 
 * Generates optimized WebP thumbnails for all project images.
 * Run with: node scripts/generate-thumbnails.mjs
 * 
 * Features:
 * - Converts to WebP format (25-35% smaller)
 * - Creates multiple sizes (thumb: 400px, medium: 800px)
 * - Generates tiny blur placeholders (20px)
 * - Preserves folder structure
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, extname, basename, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

// Configuration
const CONFIG = {
    sourceDir: join(PROJECT_ROOT, 'public/projects'),
    outputDir: join(PROJECT_ROOT, 'public/projects-optimized'),
    sizes: {
        thumb: { width: 400, quality: 80 },      // Grid preview
        medium: { width: 800, quality: 85 },     // Lightbox
        placeholder: { width: 20, quality: 60 }, // Blur-up (tiny)
    },
    supportedFormats: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
};

// Statistics
let stats = {
    processed: 0,
    skipped: 0,
    errors: 0,
    originalSize: 0,
    optimizedSize: 0,
};

/**
 * Recursively get all image files in a directory
 */
async function getImageFiles(dir, files = []) {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
            await getImageFiles(fullPath, files);
        } else {
            const ext = extname(entry.name).toLowerCase();
            if (CONFIG.supportedFormats.includes(ext)) {
                files.push(fullPath);
            }
        }
    }

    return files;
}

/**
 * Ensure directory exists
 */
async function ensureDir(dir) {
    try {
        await mkdir(dir, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

/**
 * Process a single image
 */
async function processImage(imagePath) {
    const relativePath = relative(CONFIG.sourceDir, imagePath);
    const dir = dirname(relativePath);
    const name = basename(relativePath, extname(relativePath));

    try {
        // Get original file size
        const originalStats = await stat(imagePath);
        stats.originalSize += originalStats.size;

        // Load image
        const image = sharp(imagePath);
        const metadata = await image.metadata();

        // Process each size
        for (const [sizeName, sizeConfig] of Object.entries(CONFIG.sizes)) {
            const outputDir = join(CONFIG.outputDir, dir);
            await ensureDir(outputDir);

            const outputFilename = sizeName === 'placeholder'
                ? `${name}-placeholder.webp`
                : sizeName === 'thumb'
                    ? `${name}-thumb.webp`
                    : `${name}-medium.webp`;

            const outputPath = join(outputDir, outputFilename);

            // Skip if image is smaller than target width
            const targetWidth = Math.min(sizeConfig.width, metadata.width || sizeConfig.width);

            await sharp(imagePath)
                .resize(targetWidth, null, {
                    fit: 'inside',
                    withoutEnlargement: true,
                })
                .webp({ quality: sizeConfig.quality })
                .toFile(outputPath);

            // Track optimized size (only for thumb as that's what we'll load)
            if (sizeName === 'thumb') {
                const optimizedStats = await stat(outputPath);
                stats.optimizedSize += optimizedStats.size;
            }
        }

        stats.processed++;
        console.log(`✓ ${relativePath}`);

    } catch (err) {
        stats.errors++;
        console.error(`✗ ${relativePath}: ${err.message}`);
    }
}

/**
 * Generate image mapping file for the app
 */
async function generateImageMap(files) {
    const mapping = {};

    for (const file of files) {
        const relativePath = relative(CONFIG.sourceDir, file);
        const dir = dirname(relativePath);
        const name = basename(relativePath, extname(relativePath));

        // Original path (for reference)
        const originalPath = `/projects/${relativePath.replace(/\\/g, '/')}`;

        // Optimized paths
        mapping[originalPath] = {
            thumb: `/projects-optimized/${dir.replace(/\\/g, '/')}/${name}-thumb.webp`,
            medium: `/projects-optimized/${dir.replace(/\\/g, '/')}/${name}-medium.webp`,
            placeholder: `/projects-optimized/${dir.replace(/\\/g, '/')}/${name}-placeholder.webp`,
            original: originalPath,
        };
    }

    // Write mapping to JSON file
    const fs = await import('fs/promises');
    await fs.writeFile(
        join(PROJECT_ROOT, 'src/data/imageMap.json'),
        JSON.stringify(mapping, null, 2)
    );

    console.log('\n📁 Generated src/data/imageMap.json');
}

/**
 * Main function
 */
async function main() {
    console.log('🖼️  Thumbnail Generator');
    console.log('========================\n');
    console.log(`Source: ${CONFIG.sourceDir}`);
    console.log(`Output: ${CONFIG.outputDir}\n`);

    // Get all images
    const files = await getImageFiles(CONFIG.sourceDir);
    console.log(`Found ${files.length} images to process\n`);

    if (files.length === 0) {
        console.log('No images found!');
        return;
    }

    // Ensure output directory exists
    await ensureDir(CONFIG.outputDir);

    // Process all images
    for (const file of files) {
        await processImage(file);
    }

    // Generate mapping file
    await generateImageMap(files);

    // Print summary
    console.log('\n========================');
    console.log('📊 Summary:');
    console.log(`   Processed: ${stats.processed}`);
    console.log(`   Errors: ${stats.errors}`);
    console.log(`   Original size: ${(stats.originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Optimized size: ${(stats.optimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Savings: ${((1 - stats.optimizedSize / stats.originalSize) * 100).toFixed(1)}%`);
    console.log('\n✅ Done! Thumbnails saved to public/projects-optimized/');
}

main().catch(console.error);
