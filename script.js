// Simple contact form handler - no EmailJS required

// Popup functionality
function openPopup() {
    document.getElementById('contactModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close popup when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closePopup();
    }
}

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
});

// Form submission handling with mailto fallback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        clientName: document.getElementById('clientName').value,
        email: document.getElementById('email').value,
        contactNumber: document.getElementById('contactNumber').value,
        contactReason: document.getElementById('contactReason').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.clientName || !formData.email || !formData.contactNumber) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent(`Contact Form - ${formData.clientName} - V-Infotec`);
    const body = encodeURIComponent(`Name: ${formData.clientName}\nEmail: ${formData.email}\nPhone: ${formData.contactNumber}\nReason: ${formData.contactReason || 'Not specified'}\n\nMessage:\n${formData.message || 'No message provided'}\n\n---\nSent from V-Infotec website`);
    
    const mailtoLink = `mailto:vishwakarmakashyap@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Your email client will open. Please send the email to complete your inquiry.');
    
    // Reset form and close popup
    document.getElementById('contactForm').reset();
    closePopup();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('V-Infotec website loaded successfully!');
});