# SMTP Nodemailer Setup - Guaranteed Email Delivery

## Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
cd e:\KVP
npm install
```

### 2. Get Gmail App Password
1. Go to [Google Account](https://myaccount.google.com/)
2. Security → 2-Step Verification (enable if not already)
3. Security → App passwords
4. Select app: "Mail"
5. Copy the 16-character password

### 3. Configure Environment
Edit `.env` file:
```
GMAIL_APP_PASSWORD=your-16-character-password
PORT=3000
```

### 4. Start SMTP Server
```bash
npm start
```

### 5. Test Contact Form
1. Fill contact form on website
2. Click "Send Message"
3. See: "✅ Email sent successfully! We will contact you soon."
4. Check Gmail inbox

## How SMTP Works

### Email Flow:
1. **User submits form** → **Frontend sends to SMTP server**
2. **SMTP server uses Nodemailer** → **Connects to Gmail SMTP**
3. **Gmail SMTP delivers email** → **Your inbox receives email**

### Professional Email Format:
- **Subject**: New Contact Form Submission - [Name]
- **HTML formatted** with all form data
- **Reply-to**: Client's email address
- **Delivered to**: vishwakarmakashyap@gmail.com

## SMTP Configuration Details

### Gmail SMTP Settings:
- **Host**: smtp.gmail.com
- **Port**: 587 (TLS)
- **Security**: STARTTLS
- **Authentication**: App Password

### Features:
✅ **Guaranteed delivery** via Gmail SMTP
✅ **Professional HTML emails**
✅ **Automatic retry on failure**
✅ **Connection verification**
✅ **Error logging**
✅ **Reply-to client email**

## Deployment Options

### Free Hosting:
- **Heroku**: Full SMTP support
- **Railway**: Node.js + SMTP
- **Render**: Web service deployment

### Production Environment:
```bash
# Set environment variables
GMAIL_APP_PASSWORD=Kashyap@361997
PORT=3000
```

## Troubleshooting

### Common Issues:
- **"Authentication failed"**: Check Gmail App Password
- **"Connection timeout"**: Check firewall/network
- **"Invalid credentials"**: Verify Gmail account settings

### Success Indicators:
- Console: "SMTP Server ready to send emails"
- Console: "Email sent successfully: [message-id]"
- Gmail inbox: New email received

This SMTP solution guarantees email delivery to your Gmail inbox!