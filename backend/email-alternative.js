// Alternative Simple Email Solution (Backup)
// This creates a mailto link if EmailJS fails or isn't set up

function sendEmailAlternative(formData) {
    const subject = encodeURIComponent(`Contact Form Submission - ${formData.clientName}`);
    const body = encodeURIComponent(`
Name: ${formData.clientName}
Email: ${formData.email}
Phone: ${formData.contactNumber}
Contact Reason: ${formData.contactReason || 'Not specified'}

Message:
${formData.message || 'No message provided'}

---
Sent from V-Infotec website contact form
    `);
    
    const mailtoLink = `mailto:vishwakarmakashyap@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your email client will open with the message. Please send the email to complete your inquiry.');
    
    // Reset form and close popup
    document.getElementById('contactForm').reset();
    closePopup();
}

// You can replace the EmailJS code with this simple function call:
// sendEmailAlternative(formData);