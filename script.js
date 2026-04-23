const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  return hasMinLength && hasNumber;
}

function showInputError(input, messageElement, message) {
  input.classList.add("input-error");
  messageElement.textContent = message;
}

function clearInputError(input, messageElement) {
  input.classList.remove("input-error");
  messageElement.textContent = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let isValid = true;
  successMessage.textContent = "";

  if (!email) {
    showInputError(emailInput, emailError, "Email is required.");
    isValid = false;
  } else if (!validateEmail(email)) {
    showInputError(emailInput, emailError, "Enter a valid email address.");
    isValid = false;
  } else {
    clearInputError(emailInput, emailError);
  }

  if (!password) {
    showInputError(passwordInput, passwordError, "Password is required.");
    isValid = false;
  } else if (!validatePassword(password)) {
    showInputError(
      passwordInput,
      passwordError,
      "Password must be at least 8 characters and include a number."
    );
    isValid = false;
  } else {
    clearInputError(passwordInput, passwordError);
  }

  if (isValid) {
    successMessage.textContent = "Validation passed. Ready to log in.";
    form.reset();
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("input-error")) {
    clearInputError(emailInput, emailError);
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.classList.contains("input-error")) {
    clearInputError(passwordInput, passwordError);
  }
});
