window.addEventListener("load", () => {
  document.querySelectorAll(".logo3D").forEach((el) => {
    el.classList.add("animate-logo");

    // Сохраняем текущее значение transform из computed styles
    const computedTransform = window.getComputedStyle(el).transform;

    // Если transform не задан (например, none), сохраняем пустую строку
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

    // matrix(...) в transform, поэтому применим через CSS translate()
    logo.style.transform = `${logo.dataset.base} translate(${moveX}px, ${moveY}px)`;
  });
});

document.addEventListener("mouseleave", () => {
  document.querySelectorAll(".logo3D").forEach((logo) => {
    logo.style.transform = logo.dataset.base || "";
  });
});
