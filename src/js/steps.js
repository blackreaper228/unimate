document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  let currentIndex = 0;
  let interval = null;

  function activateStep(index) {
    function show(el) {
      if (!el || el.classList.contains("visible")) return;
      el.style.visibility = "visible";
      el.style.pointerEvents = "auto";
      el.classList.remove("visible");
      void el.offsetWidth;
      el.classList.add("visible");
    }

    function hide(el) {
      if (!el) return;
      el.classList.remove("visible");
      setTimeout(() => {
        if (!el.classList.contains("visible")) {
          el.style.visibility = "hidden";
          el.style.pointerEvents = "none";
        }
      }, 400);
    }

    const individualMsgs = [
      document.querySelector(".ms01"),
      document.querySelector(".ms02"),
      document.querySelector(".ms03"),
      document.querySelector(".ms05"),
    ];
    const msgBig = document.querySelector(".msgBig");
    const innerMs04 = msgBig?.querySelector(".ms04");
    const emoji = msgBig?.querySelector(".emojiMsg");

    steps.forEach((step, i) => {
      const content = step.querySelector(".stepContent");
      const timer = step.querySelector(".timer");
      const extra = 80;
      if (!content) return;

      // === Картинки по шагам ===
      if (index === 5) {
        // Шаг 06 — показать все
        individualMsgs.forEach(show);
        show(msgBig);
        show(innerMs04);
        show(emoji);
      } else {
        // Остальные шаги — стандартная логика
        individualMsgs.forEach((msg, j) => {
          if (!msg) return;
          if (j < index) {
            show(msg);
          } else if (j === index) {
            if (index === 3) {
              hide(msg);
              show(msgBig);
              show(innerMs04);
              hide(emoji);
            } else {
              show(msg);
              hide(msgBig);
              hide(innerMs04);
              hide(emoji);
            }
          } else {
            hide(msg);
          }
        });

        if (msgBig) {
          if (index === 3 || index === 4) {
            show(msgBig);
            if (innerMs04) show(innerMs04);
            if (emoji) {
              if (index === 3) {
                hide(emoji);
                setTimeout(() => show(emoji), 800);
              } else if (index === 4) {
                emoji.style.transition = "none";
                show(emoji);
                requestAnimationFrame(() => {
                  emoji.style.transition = "";
                });
              } else {
                hide(emoji);
              }
            }
          } else {
            hide(msgBig);
            hide(innerMs04);
            hide(emoji);
          }
        }
      }

      if (i === index) {
        step.classList.add("active", "noise");
        content.style.maxHeight = "0px";
        content.style.opacity = "1";
        content.style.paddingTop = "24px";

        if (timer) {
          timer.classList.remove("animate-timer");
          void timer.offsetWidth;
          timer.classList.add("animate-timer");
        }

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            content.style.maxHeight = content.scrollHeight + extra + "px";
          });
        });
      } else {
        step.classList.remove("active", "noise");
        content.style.maxHeight = "0px";
        content.style.opacity = "0";
        content.style.paddingTop = "0";
      }
    });

    // === TypeWriter состояние ===
    const typeWriterLink = document.querySelector(".typeWriterLink");
    const typeWriterWrap = typeWriterLink?.querySelector(".typeWriterWrap");
    const typeWriter = typeWriterWrap?.querySelector(".typeWriter");
    const realText = typeWriter?.querySelector(".realText");
    const animatedText = typeWriter?.querySelector(".animatedText");
    const typeWriterIcon = typeWriterWrap?.querySelector(".typeWriterIcon");

    if (typeWriter && realText && animatedText && typeWriterIcon) {
      const newText = index === 5 ? "Мне нужна помощь!" : "Ввести сообщение...";

      realText.textContent = newText;

      if (index === 5) {
        animatedText.innerHTML =
          newText + '<span class="blinkingCursor">|</span>';
        animatedText.style.width = "0";
        void animatedText.offsetWidth;
        typeWriter.classList.add("typing");
        animatedText.style.animation =
          "typingEffect 2.4s steps(" + newText.length + ") forwards";

        setTimeout(() => {
          typeWriter.classList.remove("typing");
        }, 2400);
      } else {
        animatedText.innerHTML = newText;
        typeWriter.classList.remove("typing");
      }

      typeWriterWrap.classList.remove("help");
      if (index === 5) {
        typeWriterWrap.classList.add("help");
        typeWriterLink.style.pointerEvents = "auto";
        typeWriterLink.setAttribute("aria-disabled", "false");
        typeWriterIcon.src = "./sendActive.svg";
        typeWriterIcon.classList.add("animate-icon");
      } else {
        typeWriterLink.style.pointerEvents = "none";
        typeWriterLink.setAttribute("aria-disabled", "true");
        typeWriterIcon.src = "./send.svg";
        typeWriterIcon.classList.remove("animate-icon");
      }
    }
  }

  function startAutoSwitching() {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % steps.length;
      activateStep(currentIndex);
    }, 5000);
  }

  activateStep(currentIndex);
  startAutoSwitching();

  steps.forEach((step, i) => {
    step.addEventListener("click", () => {
      clearInterval(interval);
      currentIndex = i;
      activateStep(i);
      startAutoSwitching();
    });
  });
});
