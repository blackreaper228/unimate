const offsets = {
  servicesBlock: 160,
  howSec: 120,
  garantee: -80,
  results: 150,
  review: 100,
  forms: -60,
};

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const id = this.getAttribute("href").substring(1);
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();

    const offset = offsets[id] || 0; // если не указано — 0
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});
