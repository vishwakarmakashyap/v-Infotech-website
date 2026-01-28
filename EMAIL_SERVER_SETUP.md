# Node.js Email Server Setup

## Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
cd e:\KVP
npm install
```

### 2. Enable Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification (enable if not already)
3. Security → App passwords
4. Generate password for "Mail"
5. Copy the 16-character password

### 3. Update Email Server
Edit `email-server.js` line 11:
```javascript
pass: 'your-16-character-app-password' // Replace with actual password
```

### 4. Start the Server
```bash
npm start
```
Server runs on: http://localhost:3000

### 5. Test Contact Form
1. Fill out the contact form on your website
2. Click "Send Message"
3. See success popup: "✅ Email sent successfully! We will contact you soon."
4. Check Gmail inbox for the email

## How It Works

### User Experience:
1. **User fills form** → **Clicks "Send Message"**
2. **Button shows "Sending..."**
3. **Success**: "✅ Email sent successfully! We will contact you soon."
4. **Failure**: "❌ Mail not sent, try again"

### Email Details:
- **To**: vishwakarmakashyap@gmail.com
- **Subject**: New Contact Form Submission - [Name]
- **Content**: Professional HTML format with all form data
- **Reply-To**: Client's email address

## Deployment Options

### Free Hosting:
- **Heroku**: `git push heroku main`
- **Railway**: Connect GitHub repo
- **Render**: Deploy as Web Service

### Update Frontend URL:
After deployment, update `script.js` line 32:
```javascript
fetch('https://your-deployed-url.com/send-email', {
```

## Features:
✅ Automatic email delivery to your Gmail
✅ Professional HTML email formatting
✅ Proper success/failure popup messages
✅ Form validation and error handling
✅ Client's email as reply-to address
✅ No external service dependencies