const countdown = document.getElementById("countdown");
const weddingDate = new Date("April 28, 2026 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
