const signupForm = document.getElementById("signupForm");

const usernameInput = document.getElementById("username");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const phoneInput = document.getElementById("phone");

const usernameError = document.getElementById("usernameError");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const phoneError = document.getElementById("phoneError");

const result = document.getElementById("result");

const clearErrors = () => {
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  phoneError.textContent = "";
};

const handleSignupFormSubmit = (event) => {
  event.preventDefault();

  clearErrors();

  const username = usernameInput.value.trim();

  const email = emailInput.value.trim();

  const password = passwordInput.value.trim();

  const phone = phoneInput.value.trim();

  let isValid = true;

  if (!username) {
    usernameError.textContent = "Username is required";

    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    emailError.textContent = "Email is required";

    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format";

    isValid = false;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  if (!password) {
    passwordError.textContent = "Password is required";

    isValid = false;
  } else if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one digit";

    isValid = false;
  }

  const phoneRegex = /^\d{10}$/;

  if (!phone) {
    phoneError.textContent = "Phone number is required";

    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Phone number must contain 10 digits";

    isValid = false;
  }

  if (!isValid) {
    result.innerHTML = "";

    return;
  }

  result.innerHTML = `
    <div class="success">
      <h3>User Information</h3>

      <p>
        Username: ${username}
      </p>

      <p>
        Email: ${email}
      </p>

      <p>
        Password: ${password}
      </p>

      <p>
        Phone Number: ${phone}
      </p>
    </div>
  `;
};

signupForm.addEventListener("submit", handleSignupFormSubmit);
