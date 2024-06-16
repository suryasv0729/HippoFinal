const hamburgerMenu = document.querySelector(".hamburger-menu");
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerMenu.addEventListener("click", function () {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });
});
