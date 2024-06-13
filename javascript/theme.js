const themeToggle = document.querySelector(".theme-toggle-btn");
const platformHeadlineImg = document.querySelector(".platform-headline-img");
const statementImg = document.querySelector(".statement-img");
const themeStatus = document.querySelector(".theme-status");

const ICON_LIGHT = "./public/core-logo-icon-light.svg";
const ICON_DARK = "./public/core-logo-icon-dark.svg";

const swapImage = () => {
  const newSrc = getCurrentTheme() === ICON_LIGHT ? ICON_DARK : ICON_LIGHT;
  setImagesSrc(newSrc);
  updateAriaAttributes(newSrc);
};

const setImagesSrc = (src) => {
  platformHeadlineImg.setAttribute("src", src);
  statementImg.setAttribute("src", src);
};

const getCurrentTheme = () => statementImg.getAttribute("src");

const applyThemeBasedOnPreference = () => {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ICON_LIGHT
    : ICON_DARK;
  setImagesSrc(theme);
  updateAriaAttributes(theme);
  document.body.classList.toggle("theme-swap", theme === ICON_DARK);
};

const toggleTheme = () => {
  document.body.classList.toggle("theme-swap");
  swapImage();
};

const updateAriaAttributes = (theme) => {
  const isDarkTheme = theme === ICON_LIGHT;
  themeToggle.setAttribute("aria-pressed", isDarkTheme);
  themeStatus.textContent = isDarkTheme ? "Dark theme" : "Light theme";
  themeToggle.setAttribute(
    "aria-label",
    isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
  );
};

themeToggle.addEventListener("click", toggleTheme);

applyThemeBasedOnPreference();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applyThemeBasedOnPreference);
