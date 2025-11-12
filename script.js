document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get form values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  const errorElement = document.getElementById('error');
  errorElement.textContent = "";

  // Simple Validation
  if (username === "" || password === "") {
    errorElement.textContent = "Both fields are required.";
    return;
  }

  // Demo credentials check (replace with real authentication in practice)
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    errorElement.textContent = "";
    // Redirect or further logic here
  } else {
    errorElement.textContent = "Invalid username or password.";
  }
});
