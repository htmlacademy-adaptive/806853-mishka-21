'use strict'
// burger
var burgerMenu = document.querySelector(".js-burger")
var mobileMenu = document.querySelector(".js-nav")
var maxMobileWidth = 768

if (document.body.clientWidth < maxMobileWidth) {
  mobileMenu.classList.add("visually-hidden")
  burgerMenu.classList.add("burger--close")
  burgerMenu.classList.remove("burger--open")
  burgerMenu.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!burgerMenu.classList.contains("burger--open")) {
      burgerMenu.classList.add("burger--open");
      burgerMenu.classList.remove("burger--close")
      mobileMenu.classList.remove("visually-hidden")
    } else {
      burgerMenu.classList.add("burger--close")
      burgerMenu.classList.remove("burger--open");
      mobileMenu.classList.add("visually-hidden")
    }
  });
}

var modal = document.querySelector(".js-modal");
var modalOpen = document.querySelector(".js-modal-open");

modalOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("visually-hidden");
});

document.addEventListener('keydown', function (event) {
  if (event.code == 'Escape') {
    event.preventDefault();
    modal.classList.add("visually-hidden");
  }
});
