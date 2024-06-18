const customSelect = document.querySelectorAll(".custom-select");
const selectBtn = document.querySelectorAll(".select-button");
const selectedValue = document.querySelectorAll(".selected-value");
const shadowInput = document.querySelectorAll(".custom-select-input");
const errorLabels = document.querySelectorAll(".just-validate-error-label");
const submitBtn = document.querySelector(".submit-btn");

let targetValue;

selectBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    customSelect.forEach((x) => {
      if (x !== customSelect[index]) {
        x.classList.remove("active");
      }
    });

    customSelect[index].classList.toggle("active");
    targetValue = index;

    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
});

const optionsList = document.querySelectorAll(".select-dropdown li");

optionsList.forEach((option, index) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue[targetValue].textContent = this.children[1].textContent;
      customSelect[targetValue].classList.remove("active");
      customSelect[targetValue].classList.remove("border-danger");

      shadowInput[targetValue].value = this.children[1].textContent;

      validator.revalidate();
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue[targetValue].textContent = this.textContent;
      customSelect[targetValue].classList.remove("active");
      customSelect[targetValue].classList.remove("border-danger");

      shadowInput[targetValue].value = this.children[1].textContent;

      validator.revalidate();
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

window.addEventListener("click", (event) => {
  if (!event.target.closest(".select-dropdown , .custom-select")) {
    customSelect.forEach((x) => {
      x.classList.remove("active");
    });
  }
});

submitBtn.addEventListener("click", () => {
  validator.onValidate((fields) => {
    Object.keys(fields.fields).map((key) => {
      const child = fields.fields[key];
      const parent = child.elem.nextElementSibling;
      if (!child.isValid) {
        parent.classList.add("border-danger");
      }
    });
  });
});
