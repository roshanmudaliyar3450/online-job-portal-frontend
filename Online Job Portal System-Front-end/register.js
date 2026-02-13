// Toggle password
function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

// Role selection
document.querySelectorAll(".role-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".role-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

// Fake submit (frontend demo)
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Account Created Successfully 🚀");
});

