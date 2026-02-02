const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Gmail transporter configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'vishwakarmakashyap@gmail.com',
        pass: 'your-gmail-app-password' // Replace with your Gmail App Password
    }
});

// Contact form endpoint
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, phone, reason, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and phone are required'
            });
        }

        // Email content
        const mailOptions = {
            from: 'vishwakarmakashyap@gmail.com',
            to: 'vishwakarmakashyap@gmail.com',
            subject: `New Contact Form Submission - ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Contact Reason:</strong> ${reason || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message || 'No message provided'}</p>
                <hr>
                <p><em>Sent from V-Infotec website contact form</em></p>
            `,
            replyTo: email
        };

        // Send email
        await transporter.sendMail(mailOptions);
        
        res.json({ 
            success: true, 
            message: 'Email sent successfully! We will contact you soon.' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Mail not sent, try again' 
        });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'V-Infotec Email Server is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Email server running on port ${PORT}`);
});