const noBtn = document.getElementById('noBtn');
const videoModal = document.getElementById('videoModal');
const video = document.getElementById('vdayVideo');

function openVideo() {
  videoModal.classList.remove('hidden');
  video.play();
}

function closeVideo() {
  videoModal.classList.add('hidden');
  video.pause();
}

function celebrate() {
  document.getElementById('letterSection').classList.add('hidden');
  document.getElementById('successScreen').classList.remove('hidden');
}

// Logic to make the NO button move away
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
