# EmailJS Setup for GitHub Pages

## Quick Setup (5 minutes)

1. **Go to EmailJS**: https://www.emailjs.com/
2. **Sign up** with your Gmail account
3. **Add Email Service**:
   - Choose Gmail
   - Connect your Gmail account
   - Service ID will be generated (e.g., `service_vinfotec`)

4. **Create Email Template**:
   - Template ID: `template_contact`
   - Subject: `New Contact from {{from_name}}`
   - Content:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Reason: {{reason}}
   Message: {{message}}
   ```

5. **Get Public Key**:
   - Go to Account > API Keys
   - Copy your Public Key

6. **Update script.js**:
   - Replace `YOUR_PUBLIC_KEY` with your actual public key
   - Update service and template IDs if different

## Current Configuration
- Service ID: `service_vinfotec`
- Template ID: `template_contact`
- Public Key: `YOUR_PUBLIC_KEY` (needs to be replaced)

## Benefits
✅ Works with GitHub Pages (HTTPS)
✅ No server required
✅ Free tier: 200 emails/month
✅ No CORS issues