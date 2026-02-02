const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'vishwakarmakashyap@gmail.com',
        pass: 'your-app-password' // You'll need to generate this
    }
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, reason, message } = req.body;

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
            message: 'Email sent successfully!' 
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send email' 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});