function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const error = document.getElementById("error");

  // hardcoded ARG credentials
  if (user === "operator" && pass === "darkstate") {
    window.location.href = "terminal.html";
  } else {
    error.textContent = "ACCESS DENIED";
  }
}