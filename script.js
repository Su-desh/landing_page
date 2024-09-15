// Toggle Menu for Mobile View
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Testimonial Slider for Mobile
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

// Function to display one testimonial at a time on mobile screens
function showTestimonial(index) {
    testimonials.forEach((testimonial, idx) => {
        if (idx === index) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}

// Initial setup: Show the first testimonial
showTestimonial(currentTestimonialIndex);

// Function to go to the next testimonial
function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

// Function to go to the previous testimonial
function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

// Add swipe event listeners for mobile devices
let startX;
let endX;

document.querySelector('.testimonial-carousel').addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
});

document.querySelector('.testimonial-carousel').addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    if (startX - endX > 50) {
        nextTestimonial(); // Swipe left
    } else if (endX - startX > 50) {
        prevTestimonial(); // Swipe right
    }
});

// Call button click event (scrolls the form into view)
document.querySelector('.call-button').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// Chat button click event (opens WhatsApp)
document.querySelector('.chat-button').addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=+918553487848', '_blank');
});

// Form validation function
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const location = document.getElementById('location').value.trim();

    if (name === '' || phone === '' || email === '' || location === '') {
        alert('All fields are required.');
        return false;
    }
    return true;
}
