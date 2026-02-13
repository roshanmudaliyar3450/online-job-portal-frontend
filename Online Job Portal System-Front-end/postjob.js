function goDashboard() {
  window.location.href = "recruitor-dashboard.html";
}

function logout() {
  const confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    window.location.href = "signin.html";
  }
}
