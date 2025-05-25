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

  // rolling-img
  document.querySelectorAll(".rolling-img").forEach((el) => {
    observer.observe(el);
  });

  function animateRolling(wrapper) {
    const spans = wrapper.querySelectorAll("span");

    spans.forEach((span, index) => {
      const finalChar = span.dataset.final;

      if (/\d/.test(finalChar)) {
        const block = document.createElement("div");
        block.style.transition = "transform 2.5s ease";
        block.style.display = "block";
        block.style.lineHeight = "1em";

        // Генерируем случайное число строк от 20 до 40 для каждого span
        const rollCount = Math.floor(Math.random() * 20) + 20;

        for (let i = 0; i < rollCount; i++) {
          const line = document.createElement("div");
          line.textContent = Math.floor(Math.random() * 10); // случайная цифра
          block.appendChild(line);
        }

        // Добавляем финальный символ
        const finalLine = document.createElement("div");
        finalLine.textContent = finalChar;
        block.appendChild(finalLine);

        span.appendChild(block);

        requestAnimationFrame(() => {
          block.style.transform = `translateY(-${rollCount}em)`;
        });
      } else {
        span.textContent = finalChar;
        span.style.opacity = 0;
        span.style.transform = "scale(0.8)";
        span.style.display = "inline-block";
        span.style.transition = "opacity 1s ease, transform 1s ease";

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

    // Используем разные высоты в зависимости от ширины экрана
    const isMobile = window.innerWidth < 469;
    const iconHeight = isMobile ? 36 : 68; // или любые твои реальные размеры
    const indexToStopAt = 6;

    span.style.transition = "transform 2s ease";

    requestAnimationFrame(() => {
      span.style.transform = `translateY(-${iconHeight * indexToStopAt}px)`;
    });
  }
});
