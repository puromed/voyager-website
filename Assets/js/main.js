// scrolled navbar
const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 56) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scrolled");
  }
});

// reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
    } else {
      entry.target.classList.remove("reveal-visible");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden-text");
hiddenEl.forEach((el) => {
  observer.observe(el);
});

const itemImg = document.querySelectorAll(".item-img");
itemImg.forEach((el) => {
  observer.observe(el);
});

const emailText = document.querySelectorAll(".form-text");
emailText.forEach((el) => {
  observer.observe(el);
});

// anims
const animContainer = document.querySelector(".anim-container");
const carousels = [...document.querySelectorAll(".carousel")];
const indicators = [...document.querySelectorAll(".indicators span")];

let carousel_index = 0;

setTimeout(() => {
  animContainer.remove();
  carousels[0].classList.add("active");
  indicators[0].classList.add("active");
  setIntervalForSlider();
}, 3500);

const setIntervalForSlider = () => {
  setInterval(() => {
    indicators[carousel_index].classList.remove("active");
    carousels[carousel_index].classList.remove("active");

    if (carousel_index === carousels.length - 1) {
      carousel_index = 0;
    } else {
      carousel_index++;
    }

    indicators[carousel_index].classList.add("active");
    carousels[carousel_index].classList.add("active");
  }, 4000);
};