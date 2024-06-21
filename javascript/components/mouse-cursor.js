import { coreVideo } from "./video.js";

const cursor = document.querySelector(".mouse-cursor"),
  menuBtn = document.querySelector(".menu-btn"),
  themeToggleBtn = document.querySelector(".theme-toggle-btn"),
  videoToggleBtn = document.querySelector(".video-toggle-btn");

const socialMediaLinks = document.querySelectorAll(".social-media-link"),
  cta2 = document.querySelectorAll(".cta-2"),
  cursorVanish = document.querySelectorAll(".cursor-vanish");

let followMouse = true;
cursor.style.opacity = 0; // Initially hide when loading the site

document.addEventListener("mousemove", (e) => {
  cursor.style.opacity = 1;

  if (followMouse) {
    cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
  }
});

// Toggle vanish class to mouse cursor
const cursorHoverVanish = (elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.classList.add("vanish-mouse-cursor");
  });
  elem.addEventListener("mouseleave", () => {
    cursor.classList.remove("vanish-mouse-cursor");
  });
};

// Hide mouse cursor per class
cursorVanish.forEach(cursorHoverVanish);

// Toggle sibling selector (dot, icon, etc...)
const cursorHoverSibling = (elements, querySelector, activeClass) => {
  elements.forEach((element) => {
    element.addEventListener("mousemove", () => {
      followMouse = false;
      const sibling = element.querySelector(querySelector);
      const siblingRef = sibling.getBoundingClientRect();
      const centerX = siblingRef.left + siblingRef.width / 2;
      const centerY = siblingRef.top + siblingRef.height / 2;
      cursor.style.transform = `translate(${
        centerX - cursor.offsetWidth / 2
      }px, ${centerY - cursor.offsetHeight / 2}px)`;
      cursor.classList.add(activeClass);
    });

    element.addEventListener("mouseleave", () => {
      followMouse = true;
      cursor.classList.remove(activeClass);
    });
  });
};

cursorHoverSibling(cta2, ".cta-2-icon", "cta-2-active");

socialMediaLinks.forEach((link) => {
  link.addEventListener("mousemove", () => {
    const linkRect = link.getBoundingClientRect();
    const centerX = linkRect.left + linkRect.width / 2;
    const centerY = linkRect.top + linkRect.height / 2;
    cursor.style.transform = `translate(${
      centerX - cursor.offsetWidth / 2
    }px, ${centerY - cursor.offsetHeight / 2}px)`;
    cursor.classList.add("social-link-active");
    followMouse = false;
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("social-link-active");
    followMouse = true;
  });
});

const handleMouseMove = (event, element) => {
  const elementRect = element.getBoundingClientRect();
  const centerX = elementRect.left + elementRect.width / 2;
  const centerY = elementRect.top + elementRect.height / 2;
  cursor.style.transform = `translate(${centerX - cursor.offsetWidth / 2}px, ${
    centerY - cursor.offsetHeight / 2
  }px)`;
  cursor.classList.add("menu-btn-active");
  followMouse = false;
};

menuBtn.addEventListener("mousemove", (event) => {
  handleMouseMove(event, menuBtn);
});

menuBtn.addEventListener("mouseleave", () => {
  cursor.classList.remove("menu-btn-active");
  followMouse = true;
});

themeToggleBtn.addEventListener("mousemove", (event) => {
  handleMouseMove(event, themeToggleBtn);
});

themeToggleBtn.addEventListener("mouseleave", () => {
  cursor.classList.remove("menu-btn-active");
  followMouse = true;
});

//
// Video Hover
//

coreVideo.addEventListener("mousemove", (e) => {
  videoToggleBtn.style.translate = `calc(${e.clientX}px - calc(50vw + 50%)) calc(${e.clientY}px - calc(50vh + 50%))`;
});

coreVideo.addEventListener("mouseleave", () => {
  videoToggleBtn.style.translate = "-50% -50%";
});
