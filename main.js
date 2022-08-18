// accessing DOM elements
const hamburger = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".navbar__menu"),
  parentDropDown = document.querySelectorAll(".dropdown"),
  dropDownContent = document.querySelectorAll(".dropdown-content"),
  mainBody = document.querySelector(".main"),
  heroBody = document.querySelector(".hero");

// click hamburger menu to open or close navigation menu
hamburger.addEventListener("click", mobileMenu);

//click anywhere to close navigation menu
mainBody.addEventListener("click", closeMenu);
heroBody.addEventListener("click", closeMenu);

// open/close navigation menu
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// close navigation menu
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// convert dropdown DOM nodes to list
const dropDownContentList = Array.from(dropDownContent);
const parentDropDownList = Array.from(parentDropDown);

// open drop menu
function openDropDown() {
  parentDropDownList.forEach(function (item) {
    if ((item.childNodes[0].style.display = "block")) {
      item.childNodes[0].style.display = "none";
    } else {
      item.childNodes[0].style.display = "block";
    }
  });
}

parentDropDownList.forEach(function (item) {
  item.addEventListener("click", openDropDown);
});
