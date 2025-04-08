const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("translate-0");
  menu.classList.toggle("-translate-y-[1000px]");
});
