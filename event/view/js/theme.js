const toggleBtn = document.querySelector(".theme-toggle-btn");
    const rootElement = document.documentElement;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      rootElement.classList.add("dark");
    }

    // Optional: Auto-detect system preference on first visit
    if (!savedTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        rootElement.classList.add("dark");
      }
    }

    // Toggle theme on button click
    toggleBtn.addEventListener("click", () => {
      rootElement.classList.toggle("dark");

      // Save preference
      if (rootElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });