# Node.js Backend Setup for V-Infotec Contact Form

## Prerequisites
- Node.js installed on your computer
- Gmail account with App Password enabled

## Setup Steps

### 1. Install Dependencies
```bash
cd e:\KVP
npm install
```

### 2. Enable Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click "Security" → "2-Step Verification" (enable if not already)
3. Click "App passwords"
4. Generate password for "Mail"
5. Copy the 16-character password

### 3. Update Server Configuration
Edit `server.js` line 11:
```javascript
pass: 'your-16-character-app-password' // Replace with actual app password
```

### 4. Run the Server
```bash
npm start
```
Server will run on http://localhost:3000

### 5. Test the Contact Form
1. Open your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your Gmail inbox

## Deployment Options

### Option 1: Heroku (Free)
1. Create Heroku account
2. Install Heroku CLI
3. Deploy:
```bash
git add .
git commit -m "Add Node.js backend"
heroku create v-infotec-backend
git push heroku main
```

### Option 2: Railway (Free)
1. Go to [Railway.app](https://railway.app)
2. Connect GitHub repository
3. Deploy automatically

### Option 3: Render (Free)
1. Go to [Render.com](https://render.com)
2. Connect GitHub repository
3. Deploy as Web Service

## Update Frontend URL
After deployment, update `script.js` line 32:
```javascript
fetch('https://your-deployed-backend-url.com/contact', {
```

## Environment Variables (for production)
Create `.env` file:
```
EMAIL_USER=vishwakarmakashyap@gmail.com
EMAIL_PASS=your-app-password
PORT=3000
```

Update `server.js` to use environment variables:
```javascript
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS
```

## Benefits of Node.js Solution
- ✅ Complete control over email sending
- ✅ Professional email formatting
- ✅ No external service dependencies
- ✅ Custom success/error handling
- ✅ Free to deploy and run
- ✅ Can add database logging later

## Troubleshooting
- **"Authentication failed"**: Check Gmail App Password
- **CORS errors**: Ensure cors middleware is enabled
- **Port errors**: Change PORT in server.js
- **Email not received**: Check Gmail spam folder