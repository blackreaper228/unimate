const cards = document.querySelectorAll(".card");
const overlays = document.querySelectorAll(".overlay.noise");

function updateGlow(e) {
  overlays.forEach((overlay) => {
    const card = overlay.querySelector(".card");
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
}

function updateTilt(e) {
  overlays.forEach((overlay) => {
    const card = overlay.querySelector(".card");
    const tiltEnabled = card.dataset.tilt !== "false";
    if (!tiltEnabled) return;

    const rect = overlay.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const maxDistance = 400;

    if (distance < maxDistance) {
      const factor = 1 - distance / maxDistance;
      const rotateX = -(deltaY / 20) * factor;
      const rotateY = (deltaX / 20) * factor;
      overlay.style.transform = `rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    } else {
      overlay.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  });
}

function resetTilt() {
  overlays.forEach((overlay) => {
    const card = overlay.querySelector(".card");
    if (card.dataset.tilt !== "false") {
      overlay.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  });
}

function updateEffects(e) {
  updateGlow(e);
  updateTilt(e);
}

window.addEventListener("mousemove", updateEffects);
window.addEventListener("mouseleave", resetTilt);
