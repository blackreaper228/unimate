document.addEventListener("DOMContentLoaded", () => {
  const icons = Array.from(
    document.querySelectorAll("section.archSec .cardIcon")
  );
  const buttons = document.querySelectorAll(".arrowGr");
  const descs = Array.from(document.querySelectorAll(".archDesc"));

  const positions = [
    { angle: -135, scale: 0.3 },
    { angle: -125, scale: 0.4 },
    { angle: -115, scale: 0.5 },
    { angle: -105, scale: 0.6 },
    { angle: -98.5, scale: 0.7 },
    { angle: -90, scale: 1 },
    { angle: -81.5, scale: 0.7 },
    { angle: -75, scale: 0.6 },
    { angle: -65, scale: 0.5 },
    { angle: -55, scale: 0.4 },
    { angle: -45, scale: 0.3 },
    { angle: -35, scale: 0.2 },
  ];

  let offset = 0;
  let currentDesc = 0;

  function updateDesc(nextIndex) {
    descs[currentDesc].classList.add("none");
    currentDesc = (nextIndex + descs.length) % descs.length;
    descs[currentDesc].classList.remove("none");
  }

  function render() {
    positions.forEach((pos, i) => {
      const icon = icons[(i + offset) % icons.length];

      const isVisible = pos.angle >= -125 && pos.angle <= -55;

      icon.style.transition = isVisible
        ? "transform 0.6s ease, background-color 0.6s ease"
        : "none";

      const translateX = window.innerWidth < 769 ? 2900 : 2800;
      icon.style.transform = `rotate(${pos.angle}deg) translate(${translateX}px) scale(${pos.scale})`;

      if (pos.scale === 1) {
        icon.style.backgroundColor = "#9B8DFF";
      } else if (pos.scale >= 0.7) {
        icon.style.backgroundColor = "#cac3ff";
      } else {
        icon.style.backgroundColor = "#e1ddff";
      }
    });
  }

  buttons[1].addEventListener("click", () => {
    offset = (offset + 1) % icons.length;
    updateDesc(currentDesc + 1);
    render();
  });

  buttons[0].addEventListener("click", () => {
    offset = (offset - 1 + icons.length) % icons.length;
    updateDesc(currentDesc - 1);
    render();
  });

  render();
});
