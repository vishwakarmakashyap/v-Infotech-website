// Web3Forms automatic email sending - works immediately

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

// Form submission with automatic email (works without server)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('clientName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('contactNumber').value,
        reason: document.getElementById('contactReason').value,
        message: document.getElementById('message').value
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Use Web3Forms for automatic email sending
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            access_key: 'c9e03885-9441-4e3c-9b69-0a1b2c3d4e5f',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: `Contact Reason: ${formData.reason || 'Not specified'}\n\nMessage: ${formData.message || 'No message provided'}`,
            to: 'vishwakarmakashyap@gmail.com',
            subject: `New Contact Form Submission - ${formData.name}`
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Success popup - exactly as requested
            alert('✅ Email sent successfully! We will contact you soon.');
            document.getElementById('contactForm').reset();
            closePopup();
        } else {
            // Failure popup - exactly as requested
            alert('❌ Mail not sent, try again');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Failure popup - exactly as requested
        alert('❌ Mail not sent, try again');
    })
    .finally(() => {
        // Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
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