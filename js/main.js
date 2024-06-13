const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const popoverBtn = document.querySelectorAll(".popover-btn");
const popoverContent = document.querySelectorAll(".popover-content");

popoverBtn.forEach((btn, index) => {
  const popover = new bootstrap.Popover(btn, {
    trigger: "hover", // Set the trigger to 'hover'
    html: true, // Allow HTML content
    content: popoverContent[index].innerHTML, // Set the popover content
  });
});

const colorModeToggler = document.querySelector(".toggle-color-mode");

colorModeToggler.addEventListener("click", () => {
  const htmlElement = document.documentElement;
  if (htmlElement.getAttribute("data-bs-theme") === "dark") {
    htmlElement.setAttribute("data-bs-theme", "light");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
  }
});
