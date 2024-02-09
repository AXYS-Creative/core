const navMenu = document.querySelector(".nav-menu"),
  menuBtn = document.querySelector(".menu-btn"),
  navLinks = document.querySelectorAll(".nav-link"),
  //   navFooterLinks = document.querySelectorAll(".nav-footer-link"),
  tabElementsPage = document.querySelectorAll(".tab-element-page"),
  tabElementsNav = document.querySelectorAll(".tab-element-nav"),
  siteHeader = document.querySelector(".site-header");

tabElementsNav.forEach((elem) => elem.setAttribute("tabIndex", "-1"));

function toggleNav() {
  const isNavOpen = navMenu.classList.contains("menu-active");
  navMenu.classList.toggle("menu-active");
  menuBtn.classList.toggle("menu-active");
  siteHeader.classList.toggle("menu-active");

  navMenu.setAttribute("aria-hidden", isNavOpen);
  menuBtn.setAttribute("aria-expanded", !isNavOpen);

  //   Update tabindex for tabElementsPage and tabElementsNav
  tabElementsPage.forEach((el) =>
    el.setAttribute("tabindex", isNavOpen ? "0" : "-1")
  );
  tabElementsNav.forEach((el) =>
    el.setAttribute("tabindex", isNavOpen ? "-1" : "0")
  );
}

function closeNav() {
  navMenu.classList.remove("menu-active");
  menuBtn.classList.remove("menu-active");
  siteHeader.classList.remove("menu-active");

  navMenu.setAttribute("aria-hidden", "true");
  menuBtn.setAttribute("aria-expanded", "false");

  // Reset tabindex for tabElementsPage and tabElementsNav
  tabElementsPage.forEach((el) => el.setAttribute("tabindex", "0"));
  tabElementsNav.forEach((el) => el.setAttribute("tabindex", "-1"));
}

// [...navLinks, ...navFooterLinks].forEach((link) => {
[...navLinks].forEach((link) => {
  if (!link.classList.contains("prevent-nav-close")) {
    link.addEventListener("click", closeNav);
  }
});

menuBtn.addEventListener("click", toggleNav);
