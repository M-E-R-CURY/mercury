// COUNTDOWN
const releaseDate = new Date("2025-05-022T12:10:33Z");
const timer = document.getElementById("timer");

function updateCountdown() {
  const now = new Date();
  const diff = releaseDate - now;
  if (diff <= 0) {
    timer.textContent = "Released!  (in public beta...)";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// EMAIL SUBSCRIBE
document.getElementById("subscribe-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.querySelector("input").value;
  const msg = document.getElementById("subscribe-msg");

  // Fake it for now (real version would call a backend)
  msg.textContent = `Thanks! We'll email you at ${email} when it's ready.`;
  e.target.reset();
});

// DARK MODE TOGGLE
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
