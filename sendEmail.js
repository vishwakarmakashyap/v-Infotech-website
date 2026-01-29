const nodemailer = require('nodemailer');

// SMTP Configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'vishwakarmakashyap@gmail.com',
        pass: 'Kashyap@361997' // This needs to be Gmail App Password
    }
});

// Test email function
async function sendTestEmail() {
    try {
        // Verify SMTP connection
        await transporter.verify();
        console.log('✅ SMTP Server ready to send emails');

        // Email options
        const mailOptions = {
            from: 'vishwakarmakashyap@gmail.com',
            to: 'vishwakarmakashyap@gmail.com',
            subject: 'Test Email from V-Infotec Contact Form',
            html: `
                <h2>Test Email - V-Infotec Contact Form</h2>
                <p><strong>Name:</strong> Test User</p>
                <p><strong>Email:</strong> test@example.com</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
                <p><strong>Message:</strong> This is a test email from the contact form.</p>
                <hr>
                <p><em>Sent from V-Infotec website</em></p>
            `
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');
        console.log('Message ID:', info.messageId);
        console.log('📧 Check your Gmail inbox: vishwakarmakashyap@gmail.com');

    } catch (error) {
        console.error('❌ Error sending email:', error.message);
    }
}

// Run the test
sendTestEmail();