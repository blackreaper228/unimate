const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const plane = document.querySelector(".plane");
        const maskPath = document.querySelector("#maskPath");
        const length = maskPath.getTotalLength();

        // Подготовка: сброс
        plane.style.offsetDistance = "0%";
        plane.style.opacity = "0";
        plane.style.transform = "scale(0)";
        void plane.offsetWidth;

        // Запуск: появление + вылет
        plane.style.opacity = "1";
        plane.style.transform = "scale(1) rotate(30deg)";
        plane.style.offsetDistance = "100%";

        // Маска: прорисовка линии
        maskPath.style.strokeDasharray = length;
        maskPath.style.strokeDashoffset = length;
        maskPath.style.visibility = "visible";
        maskPath.animate(
          [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
          {
            duration: 4000,
            fill: "forwards",
            easing: "ease",
          }
        );

        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: "-30% 0px -30% 0px",
  }
);

observer.observe(document.querySelector(".tgModalWrap"));

observer.observe(document.querySelector(".tgModalWrap"));
