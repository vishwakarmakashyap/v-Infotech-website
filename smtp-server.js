const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// SMTP Configuration with Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'vishwakarmakashyap@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'your-gmail-app-password'
    }
});

// Test SMTP connection
transporter.verify((error, success) => {
    if (error) {
        console.log('SMTP Error:', error);
    } else {
        console.log('SMTP Server ready to send emails');
    }
});

// Contact form endpoint
app.post('/send-contact-email', async (req, res) => {
    try {
        const { name, email, phone, reason, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, and phone are required'
            });
        }

        // Email options
        const mailOptions = {
            from: {
                name: 'V-Infotec Website',
                address: 'vishwakarmakashyap@gmail.com'
            },
            to: 'mail111111@yopmail.com',
            subject: `New Contact Form Submission - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                        <p><strong>Contact Reason:</strong> ${reason || 'Not specified'}</p>
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #2c3e50;">Message:</h3>
                        <p style="background: #fff; padding: 15px; border-left: 4px solid #3498db; margin: 10px 0;">
                            ${message || 'No message provided'}
                        </p>
                    </div>
                    
                    <hr style="border: 1px solid #eee; margin: 30px 0;">
                    <p style="color: #666; font-size: 12px;">
                        <em>This email was sent from the V-Infotec website contact form</em><br>
                        <strong>Reply directly to this email to respond to the client</strong>
                    </p>
                </div>
            `,
            replyTo: email
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
        
        res.json({ 
            success: true, 
            message: 'Email sent successfully! We will contact you soon.',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Mail not sent, try again'
        });
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'V-Infotec Email Server is running',
        timestamp: new Date().toISOString()
    });
});

// Serve static files
app.get('/', (req, res) => {
    res.send(`
        <h1>V-Infotec Email Server</h1>
        <p>Server is running and ready to send emails!</p>
        <p>SMTP Status: Connected to Gmail</p>
    `);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 V-Infotec Email Server running on port ${PORT}`);
    console.log(`📧 SMTP configured for: vishwakarmakashyap@gmail.com`);
});