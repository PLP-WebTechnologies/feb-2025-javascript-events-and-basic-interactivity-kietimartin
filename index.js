const images = [
    'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg',
    'https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg',
    'https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg',
    'https://images.pexels.com/photos/19145897/pexels-photo-19145897.jpeg',
    'https://images.pexels.com/photos/6235120/pexels-photo-6235120.jpeg'
];


let currentIndex = 0;
// getting the background
const landingSlideshow = document.querySelector('.landing-page');

function changeBackground() {
    if (landingSlideshow) {
        landingSlideshow.style.backgroundImage = `url('${images[currentIndex]}')`;
        landingSlideshow.style.transition = 'background-image 1s ease-in-out';
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        console.error('Element with class "landing-page" not found.');
    }
}

setInterval(changeBackground, 3000);

// sign up modal starts here
const modal = document.getElementById('sign-up-modal');
const openButtons = document.querySelectorAll('.sign-up-btn');
const closeButton = document.getElementById('cancel');

openButtons.forEach(button => {
    button.onclick = function () {
        modal.style.display = "block";
    }
});
closeButton.onclick = function () {
    modal.style.display = "none";
};


// form validation
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('phone-no');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    // errors
    const nameError = document.getElementById('name-error');
    const numberError = document.getElementById('number-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Validate username on input
    nameInput.addEventListener('input', function() {
    if (!this.value) {
      nameError.textContent = "Name is required!";
    } else if (this.value.length < 3) {
      nameError.textContent = "Username must be at least 3 characters long.";
    } else {
      nameError.textContent = ""; // Clear error
    }
  });

  // Basic email validation function (you might want a more robust one)
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // You might still want to add a final validation on form submit
  form.addEventListener('submit', function(event) {
    let isFormValid = true;
    if (!emailInput.value || !isValidEmail(emailInput.value)) {
      emailError.textContent = emailInput.value ? "Please enter a valid email address." : "Email is required!";
      isFormValid = false;
    }
    if (!nameInput.value || nameInput.value.length < 3) {
      nameErrorDiv.textContent = nameInput.value ? "name must be at least 3 characters long." : "name is required!";
      isFormValid = false;
    }

    if (!isFormValid) {
      event.preventDefault(); // Prevent submission if there are errors
    }
  });
})