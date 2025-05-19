window.addEventListener("load", () => {
  document.querySelectorAll(".logo3D").forEach((el) => {
    el.classList.add("animate-logo");
  });
});

document.addEventListener("mousemove", (e) => {
  const logos = document.querySelectorAll(".logo3D");

  logos.forEach((logo) => {
    const rect = logo.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    const moveX = -(offsetX * 0.05);
    const moveY = -(offsetY * 0.05);

    const baseTransform = logo.dataset.base || "";

    logo.style.transform = `${baseTransform} translate(${moveX}px, ${moveY}px)`;
  });
});

document.addEventListener("mouseleave", () => {
  const logos = document.querySelectorAll(".logo3D");

  logos.forEach((logo) => {
    const baseTransform = logo.dataset.base || "";
    logo.style.transform = baseTransform;
  });
});
