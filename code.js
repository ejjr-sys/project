const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("modal");
const openLetter = document.getElementById("openLetter");
const closeModal = document.getElementById("closeModal");

function moveNoButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}


noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  alert("YAYYY HEHEHE");
});

openLetter.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
