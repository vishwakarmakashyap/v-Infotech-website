# Complete EmailJS Setup Guide - Step by Step

## Step 1: Create EmailJS Account

1. **Go to EmailJS**: Open [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Sign Up**: Click "Sign Up" button
3. **Use Gmail**: Sign up with `vishwakarmakashyap@gmail.com`
4. **Verify Email**: Check your Gmail and verify the account

## Step 2: Add Gmail Service

1. **Go to Email Services**: In EmailJS dashboard, click "Email Services"
2. **Add New Service**: Click "Add New Service" button
3. **Choose Gmail**: Select "Gmail" from the list
4. **Connect Gmail**: 
   - Click "Connect Account"
   - Sign in with `vishwakarmakashyap@gmail.com`
   - Allow EmailJS permissions
5. **Service Created**: Note your Service ID (looks like `service_xxxxxxx`)

## Step 3: Create Email Template

1. **Go to Email Templates**: Click "Email Templates" in dashboard
2. **Create New Template**: Click "Create New Template"
3. **Template Settings**:
   - **Template Name**: `V-Infotec Contact Form`
   - **Subject**: `New Contact - {{from_name}} - V-Infotec`
4. **Template Content**:

```
Hello,

You have received a new contact form submission from your V-Infotec website:

Client Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Contact Reason: {{reason}}

Message:
{{message}}

---
Reply directly to this email to respond to the client.

Best regards,
V-Infotec Website System
```

5. **Save Template**: Click "Save" and note your Template ID (looks like `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. **Go to Account**: Click "Account" in the left menu
2. **General Tab**: Click "General" tab
3. **Copy Public Key**: Copy the Public Key (looks like `user_xxxxxxxxxx`)

## Step 5: Update Your Website

Replace these values in your `script.js` file:

**Current placeholders:**
```javascript
emailjs.init("iVqDGKdJOhOXhJhYF"); // Replace this
emailjs.send('service_vinfotec', 'template_contact', { // Replace these
```

**Replace with your actual values:**
```javascript
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");
emailjs.send('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', {
```

## Step 6: Test the Setup

1. **Open your website**: Go to your GitHub Pages URL
2. **Open Contact Form**: Click any "Contact Us" button
3. **Fill the form**: Enter test data
4. **Submit**: Click "Send Message"
5. **Check Gmail**: Look for the email in your inbox

## Quick Setup Commands

After getting your IDs, run these commands to update your website:

1. Open `script.js` file
2. Replace line 2: `emailjs.init("YOUR_PUBLIC_KEY");`
3. Replace line 35: `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {`
4. Save the file
5. Commit and push to GitHub

## Example Configuration

Here's what your final configuration should look like:

```javascript
// Initialize EmailJS
(function() {
    emailjs.init("user_abc123def456"); // Your actual public key
})();

// In the form submission handler:
emailjs.send('service_gmail123', 'template_contact456', {
    to_email: 'vishwakarmakashyap@gmail.com',
    from_name: formData.clientName,
    from_email: formData.email,
    phone: formData.contactNumber,
    reason: formData.contactReason || 'Not specified',
    message: formData.message || 'No message provided',
    reply_to: formData.email
})
```

## Troubleshooting

**If emails don't arrive:**
- Check Gmail spam folder
- Verify all IDs are correct
- Check browser console for errors
- Ensure Gmail service is connected

**Common Issues:**
- Wrong Service ID or Template ID
- Gmail service not properly connected
- Public key not initialized
- Template variables don't match

## Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all IDs are copied correctly
3. Ensure Gmail service shows "Connected" status
4. Test with a simple template first

Once setup is complete, all contact form submissions will be sent directly to `vishwakarmakashyap@gmail.com`!