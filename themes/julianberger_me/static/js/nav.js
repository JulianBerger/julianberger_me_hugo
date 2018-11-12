const navThreshold = 365;

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  handleNavigation();
});

window.onresize = function (event) {
  handleNavigation();
};

function handleNavigation() {
  // get device width
  let body = document.getElementById('body');
  let bodyWidth = body.offsetWidth;

  let fixedNav = document.getElementById('fixedNav');
  let fullscreenNavBtn = document.getElementById('fullscreenNavBtn');

  if (bodyWidth < navThreshold) {
    // fullscreen nav
    fixedNav.classList.add('hide');
    fullscreenNavBtn.classList.remove('hide');
  } else {
    // fixed nav
    fixedNav.classList.remove('hide');
    fullscreenNavBtn.classList.add('hide');
  }
}

function toggleFullscreenNav() {
  let fullscreenNav = document.getElementById('fullscreenNav');
  let backdrop = document.getElementsByClassName('backdrop')[0];

  if (fullscreenNav.classList.contains('hide')) {
    // open
    fullscreenNav.classList.remove('hide');
    backdrop.classList.add('show');
  } else {
    // close
    backdrop.classList.remove('show');
    fullscreenNav.classList.add('hide');
  }
}