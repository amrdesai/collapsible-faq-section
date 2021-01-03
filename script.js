// Variables
const buttons = document.querySelectorAll('.faq-toggle');

// Functionality for FAQ expand button
buttons.forEach((button) => {
    // Add event listener
    button.addEventListener('click', () => {
        // Toggle active class
        button.parentNode.classList.toggle('active');
    });
});
