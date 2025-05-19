document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector("nav");
  const marker = menu.querySelector(".hover-marker");
  const items = menu.querySelectorAll("li a");

  let activeLink = null;

  function moveMarkerTo(link) {
    const rect = link.getBoundingClientRect();
    const parentRect = menu.getBoundingClientRect();
    marker.style.width = `${rect.width}px`;
    marker.style.left = `${rect.left - parentRect.left}px`;
    marker.style.opacity = 1;
  }

  items.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      items.forEach((el) => {
        el.classList.remove("is-hovered", "is-dimmed");
      });

      link.classList.add("is-hovered");

      if (activeLink && activeLink !== link) {
        activeLink.classList.add("is-dimmed");
      }

      moveMarkerTo(link);
    });

    link.addEventListener("click", () => {
      items.forEach((el) => el.classList.remove("is-active", "is-dimmed"));
      link.classList.add("is-active");
      activeLink = link;
      moveMarkerTo(link);
    });
  });

  menu.addEventListener("mouseleave", () => {
    items.forEach((el) => {
      el.classList.remove("is-hovered", "is-dimmed");
    });

    if (activeLink) {
      activeLink.classList.add("is-active");
      moveMarkerTo(activeLink);
    } else {
      marker.style.opacity = 0;
    }
  });

  const navLinks = document.querySelectorAll("nav ul a");
  const formsSection = document.querySelector("#formsDiv");

  window.addEventListener("scroll", () => {
    const navHeight = menu.offsetHeight;
    const navTop = menu.getBoundingClientRect().top + navHeight / 2;

    const sections = Array.from(document.querySelectorAll("section"));
    let currentSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return navTop >= rect.top && navTop < rect.bottom;
    });

    const isOnPurple = currentSection?.classList.contains("purple");

    // 🔥 Оффсет в пикселях (например, 50px от верхней границы окна)
    const offset = 50;
    let isOnFormsTop = false;
    if (formsSection) {
      const rect = formsSection.getBoundingClientRect();
      isOnFormsTop = rect.top <= offset && rect.bottom > offset;
    }

    navLinks.forEach((link) => {
      link.classList.toggle("invert-color", isOnFormsTop || isOnPurple);
    });
  });
});
