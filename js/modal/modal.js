// var contact = document.getElementById("contact");
// var contactClose = document.getElementsByClassName("close")[0];

function showContactModal() {
  document.getElementById("contactModal").style.display = "grid";
}

function showResumeModal() {
  document.getElementById("resumeModal").style.display = "grid";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("contactModal")||event.target == document.getElementById("resumeModal")) {
    document.getElementById("contactModal").style.display = "none";
    document.getElementById("resumeModal").style.display = "none";
  }
}