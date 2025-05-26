document.addEventListener("DOMContentLoaded", () => {
  const wordElement = document.querySelector(".word");
  const words = [
    "курсовыми",
    "дипломами",
    "эссе",
    "экзаменами",
    "тестами",
    "рефератами",
    "пересдачами",
    "зачетами",
    "статьями",
  ];
  const typingSpeed = 100; // скорость печати
  const deletingSpeed = 60; // скорость удаления
  const pauseTime = 2000; // пауза после слова

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);

    wordElement.textContent = currentText;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        // Пауза перед удалением
        setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseTime);
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(type, deletingSpeed);
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
      }
    }
  }

  type(); // старт
});
