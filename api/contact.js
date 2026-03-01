import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing fields' });
    }

    try {
        // Use environment variables for authentication
        const user = process.env.GMAIL_USER || process.env.VITE_GMAIL_USER;
        const pass = process.env.GMAIL_PASS || process.env.VITE_GMAIL_PASS;

        if (!user || !pass) {
            console.error('Missing GMAIL_USER or GMAIL_PASS environment variables');
            return res.status(500).json({ message: 'Sever configuration error.' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: user,
                pass: pass
            }
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: user, // Send to your own email
            replyTo: email,
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h3>New Message from Portfolio</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
}
