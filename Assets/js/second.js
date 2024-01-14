gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray(".text");

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 20%",
      scrub: true,
    },
  });
});

// Establishment
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".establish section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".establish",
    pin: true,
    scrub: 1,
    end: "+=3000",
    snap: 1 / (sections.length - 1),
  },
});

console.log(1 / (sections.length - 1));

//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".establish",
    start: "top left",
    scrub: 1,
  },
});

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");

  // bump out if there's no items to animate
  if (text.length === 0) return;

  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "expo.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      // markers: true,
    },
  });
});
// Establishment ends

// Second Section
document.addEventListener("DOMContentLoaded", function () {
  const numberOfImages = 6;
  const minimap = document.querySelector(".minimap .preview");
  const fullSizeContainer = document.querySelector(".images");

  function getRandomLeft() {
    const values = [-15, -7.5, 0, 7.5, 15];
    return values[Math.floor(Math.random() * values.length)] + "px";
  }

  minimap.innerHTML = "";
  fullSizeContainer.innerHTML = "";

  let activeThumbnail = null;

  for (let i = 1; i < numberOfImages; i++) {
    const randomLeft = getRandomLeft();
    const imagePath = `Assets/Img/img${i}.jpg`;

    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.className = "img-thumbnail";
    thumbnailDiv.style.left = randomLeft;
    const imgThumbnail = document.createElement("img");
    imgThumbnail.src = imagePath;
    thumbnailDiv.appendChild(imgThumbnail);
    minimap.appendChild(thumbnailDiv);

    const imgDiv = document.createElement("div");
    imgDiv.className = "img";
    imgDiv.style.left = randomLeft;
    const imgFull = document.createElement("img");
    imgFull.src = imagePath;
    imgDiv.appendChild(imgFull);
    fullSizeContainer.appendChild(imgDiv);

    ScrollTrigger.create({
      trigger: imgDiv,
      start: "top center",
      end: "bottom center",
      onToggle: (self) => {
        if (self.isActive) {
          if (activeThumbnail && activeThumbnail !== thumbnailDiv) {
            animateThumbnail(activeThumbnail, false);
          }
          animateThumbnail(thumbnailDiv, true);
          activeThumbnail = thumbnailDiv;
        } else if (activeThumbnail === thumbnailDiv) {
          animateThumbnail(thumbnailDiv, false);
        }
      },
    });

    function animateThumbnail(thumbnail, isActive) {
      gsap.to(thumbnail, {
        border: isActive ? "1px solid #fff" : "none",
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1.3 : 1,
        zIndex: isActive ? 1000 : 0,
        duration: 0.3,
      });
    }
  }
});

// Third Section
document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    gsap.set(this.querySelectorAll(".phabet"), {
      opacity: 0,
    });
    gsap.to(this.querySelectorAll(".phabet"), {
      opacity: 1,
      duration: 0.075,
      stagger: {
        from: "random",
        each: 0.04,
      },
      ease: "power2.out",
    });
  });
  item.addEventListener("mouseleave", function () {
    gsap.to(this.querySelectorAll(".phabet"), {
      opacity: 0,
      duration: 0.075,
      stagger: {
        from: "random",
        each: 0.04,
      },
      ease: "power2.in",
    });
  });
});
