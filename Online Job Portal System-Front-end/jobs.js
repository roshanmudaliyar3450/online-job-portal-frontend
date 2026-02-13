const jobs = [
  { id:1, title:"Frontend Developer", company:"TechSoft", location:"Mumbai", type:"Full Time" },
  { id:2, title:"Backend Developer", company:"CodeLabs", location:"Pune", type:"Full Time" },
  { id:3, title:"UI/UX Designer", company:"DesignHub", location:"Remote", type:"Internship" },
  { id:4, title:"Python Developer", company:"AI Corp", location:"Hyderabad", type:"Full Time" },
  { id:5, title:"React Developer", company:"StartupX", location:"Remote", type:"Contract" },
];

const container = document.getElementById("jobsContainer");

function renderJobs(list){
  container.innerHTML = "";
  list.forEach(job => {
    container.innerHTML += `
      <div class="job-card">
        <span class="job-type">${job.type}</span>
        <h3>${job.title}</h3>
        <p class="company">${job.company}</p>
        <p class="location">📍 ${job.location}</p>
        <a class="view-btn" href="job-details.html?id=${job.id}">View Details</a>
      </div>
    `;
  });
}

renderJobs(jobs);

/* SEARCH */
function filterJobs(){
  const title = document.getElementById("searchTitle").value.toLowerCase();
  const location = document.getElementById("searchLocation").value.toLowerCase();

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(title) &&
    job.location.toLowerCase().includes(location)
  );

  renderJobs(filtered);
}
