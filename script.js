const hamburger = document.querySelector(".hamburger");
const sidenav = document.querySelector(".side_nav");
console.log(sidenav);
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  sidenav.classList.toggle("open");
});
