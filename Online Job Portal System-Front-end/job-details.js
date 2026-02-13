// ================= JOB DATA =================
const jobs = [
  { id:1, title:"Frontend Developer", company:"TechSoft", location:"Mumbai", type:"Full Time" },
  { id:2, title:"Backend Developer", company:"CodeLabs", location:"Pune", type:"Full Time" },
  { id:3, title:"UI/UX Designer", company:"DesignHub", location:"Remote", type:"Internship" },
  { id:4, title:"Python Developer", company:"AI Corp", location:"Hyderabad", type:"Full Time" },
  { id:5, title:"React Developer", company:"StartupX", location:"Remote", type:"Contract" },
];

// ================= GET ID FROM URL =================
const params = new URLSearchParams(window.location.search);
const jobId = Number(params.get("id"));

// ================= FIND JOB =================
const job = jobs.find(j => j.id === jobId);

if (!job) {
  alert("Job not found!");
  window.location.href = "jobs.html";
}

// ================= INJECT DATA =================
document.getElementById("jobTitle").innerText = job.title;
document.getElementById("companyName").innerText = job.company;
document.getElementById("jobLocation").innerText = job.location;
document.getElementById("jobType").innerText = job.type;

// ================= STORE FOR APPLY PAGE =================
localStorage.setItem("selectedJob", JSON.stringify(job));

// ================= BUTTON ACTIONS =================
document.getElementById("applyBtn").addEventListener("click", () => {
  window.location.href = "apply.html";
});

document.getElementById("saveBtn").addEventListener("click", () => {
  let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
  saved.push(job);
  localStorage.setItem("savedJobs", JSON.stringify(saved));
  alert("Job saved ❤️");
});
