const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  if (timeEl) {
    timeEl.textContent = Date.now() + " ms";
  }
}

updateTime();
setInterval(updateTime, 1000);