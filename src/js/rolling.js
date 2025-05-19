document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("rolling")) {
            animateRolling(entry.target);
          }
          if (entry.target.classList.contains("rolling-img")) {
            animateImage(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  // Числа
  document.querySelectorAll(".card h1").forEach((el) => {
    if (el.querySelector("img")) return;

    const original = el.textContent.trim();
    el.textContent = "";
    const wrapper = document.createElement("div");
    wrapper.className = "rolling";

    for (let i = 0; i < original.length; i++) {
      const char = original[i];
      const span = document.createElement("span");
      span.dataset.final = char;
      wrapper.appendChild(span);
    }

    el.appendChild(wrapper);
    observer.observe(wrapper);
  });

  // Отдельно ещё раз на rolling-img (если напрямую в DOM)
  document.querySelectorAll(".rolling-img").forEach((el) => {
    observer.observe(el);
  });

  function animateRolling(wrapper) {
    const spans = wrapper.querySelectorAll("span");

    spans.forEach((span) => {
      const finalChar = span.dataset.final;

      if (/\d/.test(finalChar)) {
        const block = document.createElement("div");
        block.style.transition = "transform 1s ease";
        block.style.display = "block";

        for (let i = 0; i <= 9; i++) {
          const line = document.createElement("div");
          line.textContent = i;
          block.appendChild(line);
        }

        const finalLine = document.createElement("div");
        finalLine.textContent = finalChar;
        block.appendChild(finalLine);

        span.appendChild(block);

        requestAnimationFrame(() => {
          block.style.transform = `translateY(-10em)`;
        });
      } else {
        span.textContent = finalChar;
        span.style.opacity = 0;
        span.style.transform = "scale(0.8)";
        span.style.display = "inline-block";
        span.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        requestAnimationFrame(() => {
          span.style.opacity = 1;
          span.style.transform = "scale(1)";
        });
      }
    });
  }

  function animateImage(container) {
    const span = container.querySelector("span");
    const icon = span.querySelector("img");
    if (!icon) return;

    const iconHeight = icon.clientHeight || 60;
    const indexToStopAt = 6; // индекс элемента, на котором нужно остановиться (0-based)

    requestAnimationFrame(() => {
      span.style.transform = `translateY(-${iconHeight * indexToStopAt}px)`;
    });
  }
});
