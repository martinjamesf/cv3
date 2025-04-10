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

  // [keep your SVGs here]
  const sun = '<svg class="theme-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>';

  const moon = '<svg class="theme-icon" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></g></svg>';

  const eighties = `
 <svg class="theme-icon" viewBox="0 0 24 24"><g fill="var(--primary">
    <rect x="3" y="6" width="18" height="12" rx="2" ry="2" stroke="var(--primary" stroke-width="2" fill="none"/>
    <circle cx="8" cy="12" r="2" fill="var(--primary-inverse)"/>
    <circle cx="16" cy="12" r="2" fill="var(--primary-inverse)"/>
    <path d="M3 16h18v2H3z" fill="var(--primary)"/>
  </svg>
  `;
  const themes = ["light", "dark", "eighties"];
  const icons = { light: sun, dark: moon, eighties: eighties };

  // Load saved theme or fallback to light
  let currentTheme = localStorage.getItem("theme") || "light";

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    switchTheme.innerHTML = icons[theme];
    switchTheme.setAttribute("data-tooltip", `${theme} theme`);
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

