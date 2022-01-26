// menu

let menuOpenBtn = document.querySelector(".header__mobile-menu");
let mobileMenu = document.querySelector(".menu")
let menuCloseBtn = document.querySelector(".header__mobile-menu-close");


menuOpenBtn.addEventListener("click", function () {
  mobileMenu.classList.add("menu--open");
  menuOpenBtn.classList.add("header__mobile-menu--hide");
  menuCloseBtn.classList.add("header__mobile-menu-close--active");
  inputFocus.focus();
});

menuCloseBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("menu--open");
  menuOpenBtn.classList.remove("header__mobile-menu--hide");
  menuCloseBtn.classList.remove("header__mobile-menu-close--active");
});