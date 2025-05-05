/* js/scripts.js */
console.log("Website loaded");

/* Contact form validation */
function validateForm() {
  const email = document.getElementById("email").value;
  const firstName = document.getElementById("first-name").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!firstName.trim()) {
    alert("Please enter your first name.");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

/* Theme switcher with persistence */
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const switchTheme = document.getElementById("theme-switcher");

  /* Keeping SVGs here */
  const sun = '<svg class="theme-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>';

  const moon = '<svg class="theme-icon" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></g></svg>';

  const eighties = `
  <svg class="theme-icon" viewBox="0 0 24 24">
        <g fill="var(--pico-primary)" >
          <path d="M512,298.32l-48.373-60.855l37.57-50.636l-76.622-37.496V79.981l-75.917,21.455L307.26,38.222l-51.26,42.19l-51.26-42.19 l-41.398,63.213L87.425,79.981v69.352l-76.622,37.496l37.57,50.636L0,298.32l50.266,32.43l-16.311,65.24l56.215,4.818l6.634,72.97 l72.051-32.424c24.069,18.777,54.322,29.98,87.144,29.98s63.075-11.203,87.144-29.98l72.051,32.424l6.634-72.97l56.215-4.818 l-16.311-65.24L512,298.32z M365.536,329.4c0,60.399-49.137,109.536-109.536,109.536c-60.398,0-109.536-49.138-109.536-109.536 v-46.777h219.072V329.4z M146.464,250.224V222.27h31.959l-16.973,27.954H146.464z M199.353,250.224l16.972-27.954h29.055 l-16.972,27.954H199.353z M266.311,250.224l16.972-27.954h29.055l-16.972,27.954H266.311z M365.535,250.224h-32.266l16.972-27.954 h15.294V250.224z M392.021,370.846l-4.975,54.736l-19.345-8.706c18.933-24.122,30.236-54.505,30.236-87.477V189.871h-283.87 v139.53c0,32.972,11.303,63.354,30.236,87.477l-19.345,8.706l-4.975-54.736l-45.369-3.889l12.713-50.855l-39.708-25.618 l41.602-52.338L60.033,198.81l59.791-29.259v-46.744l57.593,16.276L212.049,86.2l43.951,36.174L299.952,86.2l34.632,52.882 l57.593-16.276v46.744l59.791,29.259l-29.186,39.338l41.601,52.336l-39.708,25.618l12.713,50.855L392.021,370.846z"></path>
        </g>
        <g>
          <circle cx="205.765" cy="334.788" r="21.599"></circle>
        </g>
        <g>
          <circle cx="306.234" cy="334.788" r="21.599"></circle>
        </g>
        <g>
          <rect x="226.835" y="379.628" width="58.318" height="32.399"></rect>
        </g>
      </svg>
  `;
  const themes = ["light", "dark", "eighties"];
  const icons = { light: sun, dark: moon, eighties: eighties };

  /* Load saved theme or fallback to light */
  let currentTheme = localStorage.getItem("theme") || "light";

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    switchTheme.innerHTML = icons[theme];
    switchTheme.setAttribute("data-tooltip", `my ${theme} side`);
    localStorage.setItem("theme", theme);
  }

  if (switchTheme) {
    applyTheme(currentTheme);

    switchTheme.addEventListener("click", (e) => {
      e.preventDefault();
      let currentIndex = themes.indexOf(currentTheme);
      currentIndex = (currentIndex + 1) % themes.length;
      currentTheme = themes[currentIndex];
      applyTheme(currentTheme);
    });
  }
});

// lock

document.addEventListener("DOMContentLoaded", () => {
  const correctPassword = "openSesame"; // 🔑 Change this to your password
  const overlay = document.getElementById("lock-overlay");
  const form = document.getElementById("unlock-form");
  const passwordInput = document.getElementById("unlock-password");
  const errorMsg = document.getElementById("unlock-error");

  const storageKey = "pageUnlocked";

  function showOverlay() {
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function hideOverlay() {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Check if previously unlocked
  if (localStorage.getItem(storageKey) === "true") {
    hideOverlay();
    return;
  }

  // Watch scroll to lock at threshold
  let lockTriggered = false;
  window.addEventListener("scroll", () => {
    if (lockTriggered) return;

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    if (scrollPercent > 0.33) {
      lockTriggered = true;
      showOverlay();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwordInput.value === correctPassword) {
      localStorage.setItem(storageKey, "true");
      hideOverlay();
    } else {
      errorMsg.style.display = "block";
    }
  });
});