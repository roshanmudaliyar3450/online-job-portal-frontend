document.addEventListener("DOMContentLoaded", () => {

  /* ================= AUTH PROTECTION ================= */
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "Signin.html";
    return;
  }

  /* ================= DASHBOARD DATA ================= */
  const dashboardData = {
    jobsPosted: 6,
    totalApplications: 42,
    shortlisted: 12
  };

  /* ================= COUNTER ANIMATION ================= */
  function animateCounter(element, target) {
    let count = 0;
    const speed = 20;

    const interval = setInterval(() => {
      count++;
      element.textContent = count;

      if (count >= target) {
        element.textContent = target;
        clearInterval(interval);
      }
    }, speed);
  }

  animateCounter(document.getElementById("jobsCount"), dashboardData.jobsPosted);
  animateCounter(document.getElementById("applicationsCount"), dashboardData.totalApplications);
  animateCounter(document.getElementById("shortlistedCount"), dashboardData.shortlisted);

  /* ================= ACTION CARDS ================= */
  document.querySelectorAll(".action-card").forEach(card => {
    card.addEventListener("click", () => {
      const action = card.dataset.action;

      switch (action) {
        case "post":
          window.location.href = "postjob.html";
          break;

        case "view":
          window.location.href = "jobs.html";
          break;

        case "manage":
          window.location.href = "jobs.html";
          break;

        default:
          alert("Action not available yet");
      }
    });
  });

  /* ================= LOGOUT (FINAL & CLEAN) ================= */
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const confirmLogout = confirm("Are you sure you want to logout?");
      
      if (confirmLogout) {
        // 🔥 CLEAR SESSION
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("selectedJob");

        // 🔁 Redirect
        window.location.href = "Signin.html";
      }
    });
  }

});
