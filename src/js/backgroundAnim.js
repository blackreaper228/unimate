if (window.innerWidth >= 469) {
  window.addEventListener("load", () => {
    document.querySelectorAll(".logo3D").forEach((el) => {
      el.classList.add("animate-logo");

      const computedTransform = window.getComputedStyle(el).transform;
      el.dataset.base = computedTransform !== "none" ? computedTransform : "";
    });
  });

  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".logo3D").forEach((logo) => {
      const rect = logo.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);

      const moveX = -(offsetX * 0.05);
      const moveY = -(offsetY * 0.05);

      logo.style.transform = `${logo.dataset.base} translate(${moveX}px, ${moveY}px)`;
    });
  });

  document.addEventListener("mouseleave", () => {
    document.querySelectorAll(".logo3D").forEach((logo) => {
      logo.style.transform = logo.dataset.base || "";
    });
  });
}
