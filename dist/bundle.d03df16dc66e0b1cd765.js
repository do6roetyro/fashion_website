/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// -- GLOBAL





// -- HEADER

// -- MAIN
















//-- mobile_app



// --FOOTER



document.getElementById("emailForm").addEventListener("submit", function (event) {
  // Ваш код для проверки формы
  alert("Форма отправлена");
  event.preventDefault(); // Предотвращение стандартного поведения отправки формы
});
var menu = document.querySelector('.main-nav__list');
var buttonMenu = document.querySelector('.main-nav__button-menu');
var logo = document.querySelector('.main-nav__logo');

// -- Меню навигации на мобилке.
buttonMenu.onclick = function () {
  menu.classList.toggle("main-nav__list--close");
  buttonMenu.classList.toggle("main-nav__button-menu--burger");
  logo.classList.toggle("main-nav__logo--close");
};
/******/ })()
;