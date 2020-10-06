// var contact = document.getElementById("contact");
// var contactClose = document.getElementsByClassName("close")[0];

function showContactModal() {
  document.getElementById("contactModal").style.display = "grid";
}

function contactClose() {
  document.getElementById("contactModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("contactModal")) {
    document.getElementById("contactModal").style.display = "none";
  }
}