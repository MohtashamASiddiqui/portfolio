const menuBtn = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("nav-active");
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY > window.innerHeight / 2;
  // const home = document.querySelector(".home-1");
  // const about = document.querySelector(".about");

  const container = document.querySelector(".navbar");

  if (scroll) {
    container.classList.add("part");
    // home.classList.add("part");
    // about.classList.add("part");
  } else {
    container.classList.remove("part");
    // home.classList.remove("part");
    // about.classList.remove("part");
  }
});

TweenMax.to(".overlay h1", 2, {
  opacity: 0,
  y: -60,
  ease: Expo.easeInOut,
});

TweenMax.to(".overlay span", 2, {
  delay: 0.3,
  opacity: 0,

  y: -60,
  ease: Expo.easeInOut,
});

TweenMax.to(".overlay", 2, {
  delay: 1,
  opacity: 0,
  top: "-200%",
  ease: Expo.easeInOut,
});

TweenMax.from(".home-heading ", 2, {
  delay: 1.5,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".home-para ", 2, {
  delay: 1.7,
  x: "120% ",
  ease: Expo.easeInOut,
});

var rellax = new Rellax(".rellax");

// Scroll tigger

AOS.init({
  disable: function () {
    var maxWidth = 800;
    return window.innerWidth < maxWidth;
  },
});

// Submit Form
const success = document.querySelector("#success");

const button = document.querySelector(".contact-btn");

button.addEventListener("click", () => {
  success.innerText = "Success!";
});
