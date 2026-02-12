const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const openLetter = document.getElementById("openLetter");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const mainContent = document.getElementById("mainContent");
const success = document.getElementById("success");
const music = document.getElementById("music");


function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);


yesBtn.addEventListener("click", () => {
  mainContent.style.display = "none";
  success.classList.remove("hidden");
  music.play().catch(() => {});
});


openLetter.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
