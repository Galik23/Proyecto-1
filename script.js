function openLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

function sayYes() {
  alert("Yaaay 💖 Te amo mucho 🥰");
}

function moveButton() {
  const noBtn = document.getElementById("noBtn");
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("noBtn");
  btn.addEventListener("touchstart", moveButton);
  btn.addEventListener("mouseover", moveButton);
});
