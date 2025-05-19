window.addEventListener("load", () => {
  const marqueeInners = document.querySelectorAll(".marqueeInner");

  marqueeInners.forEach((marqueeInner) => {
    const marquee = marqueeInner.querySelector(".marquee");
    const clone = marquee.cloneNode(true);
    const direction = marqueeInner.dataset.direction === "right" ? 1 : -1;

    if (direction === 1) {
      marqueeInner.insertBefore(clone, marquee);
    } else {
      marqueeInner.appendChild(clone);
    }

    const fullWidth = marquee.offsetWidth;
    const speed = 1;
    let pos = direction === 1 ? -fullWidth : 0;

    function animate() {
      pos += direction * speed;

      if (direction === -1 && Math.abs(pos) >= fullWidth) {
        pos = 0;
      }

      if (direction === 1 && pos >= 0) {
        pos = -fullWidth;
      }

      marqueeInner.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  });
});
