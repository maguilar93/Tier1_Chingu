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
