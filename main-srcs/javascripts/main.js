"use strict";

let navbarIsShown = false;

function navbarToggle() {
  if (!navbarIsShown) {
    showNavbar();
    navbarIsShown = true;
  } else {
    hideNavbar();
    navbarIsShown = false;
  }
};

function showNavbar() {
  document.getElementById("navbar").style.width = "250px";
  document.getElementById("header").style.marginLeft = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("footer").style.marginLeft = "250px";
};

function hideNavbar() {
  document.getElementById("navbar").style.width = "0";
  document.getElementById("header").style.marginLeft = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
};
