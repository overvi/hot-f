(function () {
  const savedColorMode = localStorage.getItem("colorMode");
  if (savedColorMode) {
    document.documentElement.setAttribute("data-bs-theme", savedColorMode);
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const colorModeToggler = document.querySelector(".toggle-color-mode");
  const htmlElement = document.documentElement;
  const datas = document.querySelectorAll(".data-svg");

  // Function to apply color mode
  const applyColorMode = (mode) => {
    if (mode === "dark") {
      htmlElement.setAttribute("data-bs-theme", "dark");
      datas.forEach((x) => {
        x.src = "/assets/images/data-dark.svg";
      });
    } else {
      htmlElement.setAttribute("data-bs-theme", "light");
      datas.forEach((x) => {
        x.src = "/assets/images/data.svg";
      });
    }
  };

  // Retrieve color mode from localStorage and apply it
  const savedColorMode = localStorage.getItem("colorMode");
  if (savedColorMode) {
    applyColorMode(savedColorMode);
  }

  // Event listener for toggling color mode
  colorModeToggler.addEventListener("click", () => {
    const currentMode = htmlElement.getAttribute("data-bs-theme");
    const newMode = currentMode === "dark" ? "light" : "dark";

    // Apply the new mode and save it to localStorage
    applyColorMode(newMode);
    localStorage.setItem("colorMode", newMode);
  });
});
