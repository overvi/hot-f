if (localStorage.getItem("loginSuccess")) {
  localStorage.removeItem("loginSuccess");

  const toastEl = document.getElementById("successToast");
  const toast = new bootstrap.Toast(toastEl, {
    animation: true,
    autohide: true,
    delay: 1000,
  });
  toast.show();
}

const data = localStorage.getItem("loginSuccess");
