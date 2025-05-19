// document.addEventListener("DOMContentLoaded", () => {
//   const wrappers = document.querySelectorAll(".marqueeCardsOutie");

//   wrappers.forEach((wrapper) => {
//     const base = wrapper.querySelector(".marqueeCards");

//     // Создаем трек и вставляем его перед base
//     const track = document.createElement("div");
//     track.classList.add("marqueeTrack");
//     wrapper.appendChild(track);

//     // Добавляем копии, включая оригинал
//     const baseClone = base.cloneNode(true);
//     track.appendChild(baseClone);

//     // Получаем ширину одной группы
//     let totalWidth = base.offsetWidth;
//     let currentWidth = totalWidth;

//     // Клонируем пока не наберём хотя бы 2 ширины экрана
//     while (currentWidth < wrapper.offsetWidth * 2) {
//       const clone = baseClone.cloneNode(true);
//       track.appendChild(clone);
//       currentWidth += totalWidth;
//     }

//     // Удаляем оригинал из DOM (не нужно его дважды показывать)
//     base.remove();

//     // Запуск анимации
//     let offset = 0;
//     const speed = 1.5;

//     function animate() {
//       offset -= speed;
//       if (Math.abs(offset) >= totalWidth) {
//         offset = 0;
//       }
//       track.style.transform = `translateX(${offset}px)`;
//       requestAnimationFrame(animate);
//     }

//     animate();
//   });
// });
