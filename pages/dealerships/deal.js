// alternating fonts
const fonts1 = ["Roboto", "Arial", "Times New Roman", "Courier New", "Verdana"];
let idx = 0;

const text1 = document.querySelector(".text1");
displayFont = () => {
  text1.style.fontFamily = fonts1[idx];
  idx++;
  if (idx > fonts1.length - 1) {
    idx = 0;
  }
};

text1.addEventListener("mouseenter", () => {
  displayFont();
});

text1.addEventListener("mouseout", () => {
  text1.style.fontFamily = "DM Sans";
});

// nav
const navEl = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 56) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 56) {
    navEl.classList.remove("navbar-scrolled");
  }
});

// nav ends
