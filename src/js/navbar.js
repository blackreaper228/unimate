document.addEventListener("DOMContentLoaded", () => {
  let suppressMarkerUpdate = false;
  let suppressHover = false;

  const menu = document.querySelector("nav");
  const marker = menu.querySelector(".hover-marker");
  const items = document.querySelectorAll("li a");

  let activeLink = null;

  function moveMarkerTo(link) {
    const rect = link.getBoundingClientRect();
    const parentRect = menu.getBoundingClientRect();
    marker.style.width = `${rect.width}px`;
    marker.style.left = `${rect.left - parentRect.left}px`;
    marker.style.opacity = 1;

    // Удаляем marker-visible у всех, добавляем только текущей
    items.forEach((el) => el.classList.remove("marker-visible"));
    link.classList.add("marker-visible");
  }

  items.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (suppressHover) return;

      items.forEach((el) => {
        el.classList.remove("is-hovered", "is-dimmed", "marker-visible");
      });

      link.classList.add("is-hovered");

      if (activeLink && activeLink !== link) {
        activeLink.classList.add("is-dimmed");
      }

      moveMarkerTo(link);
    });
  });

  menu.addEventListener("mouseleave", () => {
    if (suppressHover) return;

    items.forEach((el) => el.classList.remove("is-hovered", "is-dimmed"));

    if (activeLink) {
      activeLink.classList.add("is-active");
      moveMarkerTo(activeLink);
    } else {
      marker.style.opacity = 0;
    }
  });

  const navLinks = document.querySelectorAll("nav ul a");
  const formsSection = document.querySelector("#formsDiv");

  function updateColors() {
    const navHeight = menu.offsetHeight;
    const navTop = menu.getBoundingClientRect().top + navHeight / 2;

    const sections = Array.from(document.querySelectorAll("section"));
    let currentSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return navTop >= rect.top && navTop < rect.bottom;
    });

    const isOnPurple = currentSection?.classList.contains("purple");

    const offset = 50;
    let isOnFormsTop = false;
    if (formsSection) {
      const rect = formsSection.getBoundingClientRect();
      isOnFormsTop = rect.top <= offset && rect.bottom > offset;
    }

    navLinks.forEach((link) => {
      // marker-visible всегда белый — не трогаем его
      if (!link.classList.contains("marker-visible")) {
        link.classList.toggle("invert-color", isOnFormsTop || isOnPurple);
      }
    });
  }

  function updateActiveLinkByScroll() {
    const centerY = window.innerHeight / 2;
    const sectionWithId = Array.from(document.querySelectorAll("[id]"));
    let currentSectionId = null;

    for (const section of sectionWithId) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= centerY && rect.bottom >= centerY) {
        currentSectionId = section.id;
        break;
      }
    }

    if (currentSectionId) {
      const link = Array.from(items).find(
        (link) => link.getAttribute("href") === `#${currentSectionId}`
      );

      if (link) {
        items.forEach((el) =>
          el.classList.remove("is-active", "is-hovered", "is-dimmed")
        );
        link.classList.add("is-active");
        activeLink = link;

        if (!suppressMarkerUpdate) {
          moveMarkerTo(link);
        }
      }
    }
  }

  window.addEventListener("scroll", () => {
    updateColors();
    updateActiveLinkByScroll();
  });

  items.forEach((link) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#") && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        link.addEventListener("click", (e) => {
          e.preventDefault();

          suppressHover = true;
          suppressMarkerUpdate = true;

          const targetRect = target.getBoundingClientRect();
          const targetCenter = targetRect.top + targetRect.height / 2;
          let scrollTo = targetCenter + window.scrollY - window.innerHeight / 2;

          switch (href) {
            case "#howSec":
              scrollTo -= 150;
              break;
            case "#servicesBlock":
              scrollTo -= 70;
              break;
            case "#review":
              scrollTo -= 250;
              break;
            case "#forms":
              scrollTo -= 350;
              break;
            case "#results":
              scrollTo += 100;
              break;
          }

          window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
          });

          items.forEach((el) =>
            el.classList.remove("is-active", "is-hovered", "is-dimmed")
          );
          link.classList.add("is-active");
          activeLink = link;

          setTimeout(() => {
            suppressHover = false;
            suppressMarkerUpdate = false;
            moveMarkerTo(link);
          }, 600);
        });
      }
    }
  });

  setTimeout(() => {
    window.dispatchEvent(new Event("scroll"));
  }, 1000);
});
