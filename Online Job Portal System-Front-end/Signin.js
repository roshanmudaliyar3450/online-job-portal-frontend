const form = document.getElementById("loginForm");
const successBox = document.getElementById("successBox");
const btnText = document.querySelector(".btn-text");
const loader = document.querySelector(".loader");
const eye = document.getElementById("toggleEye");
const password = document.getElementById("password");

/* Toggle password */
eye.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

/* Login submit */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnText.style.opacity = "0";
  loader.style.display = "block";

  setTimeout(() => {
    // 🔥 SESSION SET (MOST IMPORTANT)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "recruiter");

    console.log("LOGIN SUCCESS:", localStorage.getItem("isLoggedIn"));

    successBox.style.display = "flex";

    setTimeout(() => {
      window.location.href = "recruitor-dashboard.html";
    }, 2000);
  }, 1200);
});
