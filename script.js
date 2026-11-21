// Pervyweb — made by Bipin for Prekshuuuuu
// Change the relationship date below if you ever need to.
const RELATIONSHIP_START = new Date(2026, 6, 22, 0, 0, 0); // July 22, 2026
const YOUTUBE_VIDEO_ID = "LUgpPmj6nR8";

const introScreen = document.getElementById("introScreen");
const openSurprise = document.getElementById("openSurprise");
const musicToggle = document.getElementById("musicToggle");
const youtubePlayer = document.getElementById("youtubePlayer");
let musicPlaying = false;

openSurprise.addEventListener("click", () => {
  introScreen.classList.add("is-hidden");
  startMusic();
  createHeartBurst();
});

function startMusic() {
  // Playback starts only after the visitor taps the welcome button.
  // YouTube may still restrict playback or embedding for some videos.
  youtubePlayer.src =
    `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&enablejsapi=1&playsinline=1`;
  musicPlaying = true;
  musicToggle.textContent = "Ⅱ";
  musicToggle.setAttribute("aria-label", "Pause music");
  document.querySelector(".music-info span").textContent = "Playing our song ♡";
}

function sendYouTubeCommand(command) {
  if (!youtubePlayer.contentWindow) return;
  youtubePlayer.contentWindow.postMessage(
    JSON.stringify({ event: "command", func: command, args: [] }),
    "*"
  );
}

musicToggle.addEventListener("click", () => {
  if (!youtubePlayer.src) {
    startMusic();
    return;
  }
  musicPlaying = !musicPlaying;
  sendYouTubeCommand(musicPlaying ? "playVideo" : "pauseVideo");
  musicToggle.textContent = musicPlaying ? "Ⅱ" : "▶";
  musicToggle.setAttribute("aria-label", musicPlaying ? "Pause music" : "Play music");
  document.querySelector(".music-info span").textContent =
    musicPlaying ? "Playing our song ♡" : "Paused — tap to play";
});

// Live relationship counter
function updateCounter() {
  const now = new Date();
  let diff = Math.max(0, now - RELATIONSHIP_START);
  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCounter();
setInterval(updateCounter, 1000);

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections as they enter the screen
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

// A few soft floating hearts, kept lightweight for mobile
const heartLayer = document.getElementById("floatingHearts");
const heartSymbols = ["♡", "♥", "✧"];
function addFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 15}px`;
  const duration = 10 + Math.random() * 8;
  heart.style.animationDuration = `${duration}s`;
  heartLayer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
for (let i = 0; i < 7; i++) setTimeout(addFloatingHeart, i * 900);
setInterval(addFloatingHeart, 1900);

function createHeartBurst() {
  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = "♡";
    heart.style.left = `${35 + Math.random() * 30}%`;
    heart.style.bottom = "25%";
    heart.style.fontSize = `${16 + Math.random() * 18}px`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;
    heartLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 5500);
  }
}
