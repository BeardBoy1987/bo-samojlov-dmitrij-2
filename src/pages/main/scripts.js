"use strict";

var popupOpenButton = document.querySelector(".button--explore");
var popupWindow = document.querySelector(".popup-wrapper");
var popupCloseButton = document.querySelector(".contact-form__close-btn");
var inputFocus = popupWindow.querySelector("input");

  popupOpenButton.addEventListener("click", function () {
  popupWindow.classList.add("popup-wrapper--open");
  inputFocus.focus();
});

popupCloseButton.addEventListener("click", function () {
  popupWindow.classList.remove("popup-wrapper--open");
  popupOpenButton.focus();
});

window.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && popupWindow.classList.contains("popup-wrapper--open")) {
    popupWindow.classList.remove("popup-wrapper--open");
    popupOpenButton.focus();
  };
});

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
