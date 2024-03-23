const cursor = document.querySelector(".mouse-cursor"),
  logo = document.querySelector(".header-logo"),
  menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelectorAll(".nav-link"),
  navFooterLinks = document.querySelectorAll(".nav-footer-link"),
  socialMediaLinks = document.querySelectorAll(".social-media-link"),
  cta1 = document.querySelectorAll(".cta-1"),
  cta2 = document.querySelectorAll(".cta-2"),
  faqItems = document.querySelectorAll(".faq-item");

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

// Attaching vanish to individual elements
cursorHoverVanish(logo);
// Attaching events to NodeList items
[...cta1, ...faqItems, ...navLinks, ...navFooterLinks].forEach(
  cursorHoverVanish
);

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

menuBtn.addEventListener("mousemove", () => {
  const menuBtnRect = menuBtn.getBoundingClientRect();
  const centerX = menuBtnRect.left + menuBtnRect.width / 2;
  const centerY = menuBtnRect.top + menuBtnRect.height / 2;
  cursor.style.transform = `translate(${centerX - cursor.offsetWidth / 2}px, ${
    centerY - cursor.offsetHeight / 2
  }px)`;
  cursor.classList.add("menu-btn-active");
  followMouse = false;
});

menuBtn.addEventListener("mouseleave", () => {
  cursor.classList.remove("menu-btn-active");
  followMouse = true;
});
