/* js/scripts.js */
console.log("Website loaded");

/* contact script */
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
/* Theme Switcher <script> */
  const html = document.documentElement;
  const switchTheme = document.getElementById("theme-switcher");

  const sun =
    '<svg class="theme-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/></svg>';

  const moon =
    '<svg class="theme-icon" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162z"/></g></svg>';

  const eighties =
    '<svg class="theme-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M21 2H3v20h18V2Zm-2 18H5V4h14v16Zm-3.5-5c-.7 0-1.37.15-2 .43V9h4v1h-3v3.56c.3-.05.65-.06 1-.06c1.93 0 3.5 1.57 3.5 3.5S16.43 20 14.5 20S11 18.43 11 16.5c0-1.04.45-1.97 1.17-2.62c.69-.62 1.59-.88 2.33-.88c.39 0 .75.05 1.08.13c.17.05.32.1.42.15l-.49.87c-.22-.08-.52-.15-.92-.15Zm-8-7h3v1H8V9Zm1 2H8v3h3v1H7v-5h2v1Zm.5 6c-.97 0-1.76.79-1.76 1.76S8.53 20.5 9.5 20.5s1.76-.79 1.76-1.76S10.47 17 9.5 17Z"/></svg>';

  const themes = ["light", "dark", "eighties"];
  let current = 0;

  document.addEventListener("DOMContentLoaded", () => {
    if (switchTheme) {
      html.setAttribute("data-theme", themes[current]);
      switchTheme.innerHTML = sun;
      switchTheme.setAttribute("data-tooltip", "light theme");
    }
  });

  if (switchTheme) {
    switchTheme.addEventListener("click", (e) => {
      e.preventDefault();
      current = (current + 1) % themes.length;
      const theme = themes[current];

      html.setAttribute("data-theme", theme);

      switchTheme.innerHTML = theme === "light" ? sun : theme === "dark" ? moon : theme === "eighties" ? eighties;
      switchTheme.setAttribute("data-tooltip", `${theme} theme`);
    });
  }