// Redirect after video ends
const video = document.getElementById("introVideo");

if (video) {
  video.onended = function () {
    window.location.href = "invite.html";
  };
}

// Skip button
function goToInvite() {
  window.location.href = "invite.html";
}