// On click, Nav options will scroll down to the respective section
// credit to: Dev Ed: https://www.youtube.com/watch?v=oUSvlrDTLi4
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  console.log(startPosition);

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var services = document.querySelector(".servicesButton");
var about = document.querySelector(".aboutButton");
var contact = document.querySelector(".contactButton");

services.addEventListener("click", function() {
  smoothScroll(".services", 1000);
});

about.addEventListener("click", function() {
  smoothScroll(".rowTwo", 1000);
});

contact.addEventListener("click", function() {
  smoothScroll(".contact", 1000);
});

// Parallax effect on images

const partOne = document.querySelector(".partOne");
const rowOne = document.querySelector(".rowOne");
const contactImg = document.querySelector(".contact");

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  partOne.style.backgroundPositionY = offset * -0.2 + "px";
  rowOne.style.backgroundPositionY = offset * 0.3 + "px";
  contactImg.style.backgroundPositionY = offset * -0.15 + "px";
});

// hide and show navbar
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menuToggle");

menuToggle.addEventListener("click", e => {
  e.preventDefault();

  if (window.getComputedStyle(menu).display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
