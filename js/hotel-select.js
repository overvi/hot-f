const selects = document.querySelectorAll(".hotel-select");

selects.forEach((select) => {
  select.addEventListener("click", () => {
    selects.forEach((item) => {
      item.classList.remove("hotel-selected");
    });
    select.classList.add("hotel-selected");
  });
});

const popoverTrigger = document.querySelector(".popover-search-toggler");
const popoverDetailsContent = document.querySelector(".popover-search-content");

const content = popoverDetailsContent.innerHTML;
popoverDetailsContent.remove();

const popover = new bootstrap.Popover(popoverTrigger, {
  sanitize: false,
  trigger: "click",
  html: true,
  content: content,
});

window.addEventListener("click", (ev) => {
  if (!ev.target.closest(".popover-body")) {
    popover.hide();
  }
});
