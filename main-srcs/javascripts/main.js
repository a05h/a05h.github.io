"use strict";

let navbarIsShown = false;

function navbarToggle() {
  let navbar = document.getElementById("navbar"),
      mask = document.getElementById("body-mask");
  if (!navbarIsShown) {
    navbar.style.width = "250px";
    mask.style.height = "100%";
    mask.style.width = "100%";
    mask.style.backgroundColor = "rgba(50,50,50,0.3)";
    navbarIsShown = true;
  } else {
    navbar.style.width = "0";
    mask.style.height = "0";
    mask.style.width = "0";
    mask.style.backgroundColor = "rgba(50,50,50,0)";
    navbarIsShown = false;
  }
};
