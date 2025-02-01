// script.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Form validation
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Success message
    const successMessage = document.createElement('div');
    successMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
    successMessage.style.color = "green";
    successMessage.style.marginTop = "20px";
    this.appendChild(successMessage);
    
    this.reset(); // Clear the form after submission
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
