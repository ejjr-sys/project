const noBtn = document.getElementById('noBtn');
const videoModal = document.getElementById('videoModal');
const vdayVideo = document.getElementById('vdayVideo');

function openLetter() {
  videoModal.classList.remove('hidden');
  vdayVideo.play();
}

function closeModal() {
  videoModal.classList.add('hidden');
  vdayVideo.pause();
}

function celebrate() {
  document.getElementById('letterSection').classList.add('hidden');
  document.getElementById('successScreen').classList.remove('hidden');
}

// Dodge logic for the "No" button
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
