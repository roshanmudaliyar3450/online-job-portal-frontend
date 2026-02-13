document.addEventListener("DOMContentLoaded", () => {

  /* ================= LOGOUT CONFIRM (DYNAMIC) ================= */
  const logoutLinks = document.querySelectorAll(".logout");

  logoutLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const confirmLogout = confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        window.location.href = "sign-in.html";
      }
    });
  });


  /* ================= NAVBAR ACTIVE LINK ================= */
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


});
