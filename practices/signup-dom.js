const signupForm = document.getElementById("signupForm");

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

  const formData = new FormData(signupForm);

  const user = Object.fromEntries(
    [...formData.entries()].map(([key, value]) => [key, value.trim()]),
  );

  let isValid = true;

  if (!user.username) {
    usernameError.textContent = "Username is required";

    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!user.email) {
    emailError.textContent = "Email is required";

    isValid = false;
  } else if (!emailRegex.test(user.email)) {
    emailError.textContent = "Invalid email format";

    isValid = false;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!user.password) {
    passwordError.textContent = "Password is required";

    isValid = false;
  } else if (!passwordRegex.test(user.password)) {
    passwordError.textContent =
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one digit";

    isValid = false;
  }

  const phoneRegex = /^\d{10}$/;

  if (!user.phone) {
    phoneError.textContent = "Phone number is required";

    isValid = false;
  } else if (!phoneRegex.test(user.phone)) {
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
        Username: ${user.username}
      </p>

      <p>
        Email: ${user.email}
      </p>

      <p>
        Password: ${user.password}
      </p>

      <p>
        Phone Number: ${user.phone}
      </p>
    </div>
  `;
};

signupForm.addEventListener("submit", handleSignupFormSubmit);
