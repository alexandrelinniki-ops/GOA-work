const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let callsign = document.getElementById("callsign").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let terms = document.getElementById("terms").checked;

  let message = document.getElementById("message");

  if (callsign.length < 3 || callsign.length > 20) {
    message.textContent = "Invalid Callsign!";
  }
  else if (email === "") {
    message.textContent = "Enter your email!";
  }
  else if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters!";
  }
  else if (password !== confirmPassword) {
    message.textContent = "Passwords do not match!";
  }
  else if (!terms) {
    message.textContent = "Accept the Terms!";
  }
  else {
    message.textContent = "Account created successfully!";
  }
});

function togglePassword(id) {
  let input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}