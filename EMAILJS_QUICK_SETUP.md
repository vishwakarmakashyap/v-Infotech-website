# EmailJS Setup for Automatic Email Sending

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up with `vishwakarmakashyap@gmail.com`
- Verify your email

### 2. Add Gmail Service
- Dashboard → Email Services → Add New Service
- Choose "Gmail" → Connect your account
- Service ID will be: `service_xxxxxxx`

### 3. Create Email Template
- Dashboard → Email Templates → Create New Template
- Template Name: "Contact Form"
- Subject: `New Contact - {{from_name}} - V-Infotec`
- Content:
```
Hello,

New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Reason: {{reason}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

### 4. Get Your Keys
- Account → General → Copy Public Key
- Email Services → Copy Service ID
- Email Templates → Copy Template ID

### 5. Update script.js
Replace these lines in script.js:

```javascript
// Line 2: Replace YOUR_PUBLIC_KEY
emailjs.init("your_actual_public_key");

// Line 33: Replace service and template IDs
emailjs.send('your_service_id', 'your_template_id', {
```

## Working Configuration Example:
```javascript
emailjs.init("user_abc123def456");
emailjs.send('service_gmail789', 'template_contact123', {
```

## Test Results:
- ✅ Success: "Email sent successfully! We will contact you soon."
- ❌ Failure: "Mail not sent, try again"

## Benefits:
- Automatic email delivery to vishwakarmakashyap@gmail.com
- No server required - works on GitHub Pages
- Professional email formatting
- Real success/failure detection
- Client's email as reply-to address