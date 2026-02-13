document.addEventListener("DOMContentLoaded", function () {
  console.log("Signin.js loaded ✅");

  const form = document.getElementById("loginForm");
  const successBox = document.getElementById("successBox");
  const btnText = document.querySelector(".btn-text");
  const loader = document.querySelector(".loader");
  const eye = document.getElementById("toggleEye");
  const password = document.getElementById("password");

  if (!form) {
    console.error("Login form not found ❌");
    return;
  }

  /* Toggle password */
  if (eye && password) {
    eye.addEventListener("click", () => {
      password.type = password.type === "password" ? "text" : "password";
    });
  }

  /* Login submit */
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Loader animation
    if (btnText) btnText.style.opacity = "0";
    if (loader) loader.style.display = "block";

    setTimeout(() => {
      // 🔥 TEMP SESSION (FRONTEND ONLY)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "recruiter");

      console.log("LOGIN SUCCESS:", localStorage.getItem("isLoggedIn"));

      if (successBox) successBox.style.display = "flex";

      setTimeout(() => {
        window.location.href = "recruitor-dashboard.html";
      }, 1500);
    }, 1200);
  });
});
