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
    sanitize: false,
    html: true, // Allow HTML content
    content: popoverContent[index].innerHTML, // Set the popover content
  });
});
