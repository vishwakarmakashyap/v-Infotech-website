# EmailJS Setup Guide for V-Infotec Website

## Overview
The contact forms on your website are configured to send emails directly to `vishwakarmakashyap@gmail.com` using EmailJS service.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your Gmail account: `vishwakarmakashyap@gmail.com`
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your Gmail account
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{from_name}}

**Body:**
```
New contact form submission from V-Infotec website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Contact Reason: {{reason}}

Message:
{{message}}

---
This email was sent from the V-Infotec website contact form.
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., `user_abcdef123456`)

### 5. Update Website Code
Replace these placeholders in `script.js`:

```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("user_abcdef123456");

// Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('service_abc123', 'template_xyz789', {
```

### 6. Test the Contact Form
1. Open your website
2. Fill out the contact form
3. Submit and check your Gmail inbox

## Security Notes
- EmailJS public key is safe to use in frontend code
- Your Gmail credentials are never exposed
- EmailJS handles all email sending securely

## Troubleshooting
- If emails don't arrive, check Gmail spam folder
- Verify all IDs are correctly copied
- Check browser console for error messages
- Ensure Gmail service is properly connected in EmailJS

## Alternative: Simple Mailto Link
If you prefer a simpler solution without EmailJS setup, the contact form can use a mailto link instead. Let me know if you'd like this option.