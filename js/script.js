// Toggle Menu for Mobile View
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Testimonial Slider for Mobile
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-card");

// Function to display one testimonial at a time on mobile screens
function showTestimonial(index) {
  testimonials.forEach((testimonial, idx) => {
    if (idx === index) {
      testimonial.style.display = "block";
    } else {
      testimonial.style.display = "none";
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
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

// Add swipe event listeners for mobile devices
let startX;
let endX;

document
  .querySelector(".testimonial-carousel")
  .addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
  });

document
  .querySelector(".testimonial-carousel")
  .addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;
    if (startX - endX > 50) {
      nextTestimonial(); // Swipe left
    } else if (endX - startX > 50) {
      prevTestimonial(); // Swipe right
    }
  });

function validateForm() {
  var name = document.forms[0]["name"].value;
  var phone = document.forms[0]["phone"].value;
  var email = document.forms[0]["email"].value;
  var location = document.forms[0]["location"].value;

  if (name == "" || phone == "" || email == "" || location == "") {
    alert("All fields must be filled out.");
    return false;
  }
  return true;
}


function showThankYouMessage(event) {
  // Prevent the form from submitting right away
  event.preventDefault();

  // Get the form element
  var form = document.getElementById("quote-form");

  // Get the thank you message element
  var thankYouMessage = document.getElementById("thank-you-message");

  // Hide the form and display the thank you message
  form.classList.add("hide");
  thankYouMessage.classList.add("show");

  // Optionally, allow the form to be submitted to the webhook after showing the thank you message
  setTimeout(function () {
    form.submit();
  }, 500); // Adjust the delay if necessary

  return false;
}

