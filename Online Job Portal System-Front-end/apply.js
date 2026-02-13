const form = document.getElementById("applyForm");
const popup = document.getElementById("successPopup");

// Job title show (from localStorage)
const job = JSON.parse(localStorage.getItem("selectedJob"));
if (job) {
  document.getElementById("jobTitle").innerText = job.title;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();   // 🔥 VERY IMPORTANT

  // Show popup
  popup.style.display = "flex";

  // Redirect after delay
  setTimeout(() => {
    window.location.href = "jobs.html";
  }, 2500);
});
