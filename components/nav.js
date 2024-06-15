class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const direction = this.getAttribute("dir") || "ltr";
    const url = this.getAttribute("url") || "";

    const content =
      direction === "rtl" ? this.getRtlContent(url) : this.getLtrContent(url);

    this.innerHTML = content;
  }

  getRtlContent(url) {
    return `
        <header>
          <nav class="d-flex p-3 justify-content-between align-items-center">
            <div class="icon-bg padx-4 border-0 mt-0 rounded-5">
              <img
                class="btn p-0 border-0"
                src="/assets/images/logo.svg"
                alt=""
                width="15"
              />
            </div>
            <form action="">
              <div class="search d-flex rounded-5 p-0">
                <input
                  class="form-control shadow-none rounded-5 p-2 border-0"
                  placeholder="  مدیریت رسرواسیون  ..."
                  type="text"
                />
                <div class="bg-orange btn border-0 rounded-5 pad-3">
                  <img width="25" src="/assets/images/search-normal.svg" alt="" />
                </div>
              </div>
            </form>
  
            <div
              class="icon-bg border-0 mt-0 rounded-5 pad-2 btn border-0 rounded-5 pad-2"
            >
              <img
                type="button"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-pop"
                data-bs-content="Add Reservation"
                src="/assets/images/add.svg"
              />
            </div>
            <div
              class="icon-bg border-0 mt-0 rounded-5 pad-2 btn border-0 rounded-5 pad-2"
            >
              <img
                type="button"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-pop"
                data-bs-content="Calander"
                src="/assets/images/calendar.svg"
              />
            </div>
            <div
              class="icon-bg border-0 rounded-5 pad-2 btn border-0 rounded-5 pad-2"
            >
              <img
                type="button"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-pop"
                data-bs-content="Reservations"
                src="/assets/images/book-saved.svg"
              />
            </div>
  
            <div class="d-flex align-items-center me-5 gap-2">
              <div class="icon-bg border-0 mt-0 rounded-5 pad-2">
                <a href="/en/${url}">
                  <img
                    type="button"
                    data-bs-toggle="popover"
                    data-bs-trigger="hover focus"
                    data-bs-placement="bottom"
                    data-bs-custom-class="custom-pop"
                    data-bs-content="Change Language "
                    src="/assets/images/language-circle.svg"
                    alt=""
                  />
                </a>
              </div>
              <div class="btn p-0 border-0">
                <div class="icon-bg border-0 mt-0 rounded-5 pad-2">
                  <img
                    type="button"
                    data-bs-toggle="popover"
                    data-bs-trigger="hover focus"
                    data-bs-placement="bottom"
                    data-bs-custom-class="focus-pop shadow-sm"
                    data-bs-content=""
                    class="popover-btn"
                    src="/assets/images/clipboard-text.svg"
                    alt=""
                  />
                </div>
  
                <div class="d-none popover-content gap-3 flex-column">
                  <p class="fw-bold">Active Reservation</p>
                  <div class="pad-9">
                    <img class="data-svg" src="/assets/images/data.svg" alt="" />
                    <p class="text-gray-300 fw-semibold me-2">No Data</p>
                  </div>
                </div>
              </div>
              <div
                class="icon-bg toggle-color-mode border-0 mt-0 rounded-5 pad-2"
              >
                <div>
                  <img
                    type="button"
                    data-bs-toggle="popover"
                    data-bs-trigger="hover focus"
                    data-bs-placement="bottom"
                    data-bs-custom-class="custom-pop"
                    data-bs-content="Dark / Light"
                    src="/assets/images/moon.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button
                type="button"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-placement="bottom"
                data-bs-custom-class="focus-pop"
                data-bs-content=""
                class="p-1 px-2 popover-btn border-0 hotel-profile-btn icon-bg rounded-5"
              >
                <img
                  width="40"
                  height="40"
                  class="d-inline"
                  src="/assets/images/espinas.png"
                  alt=""
                />
                <span class="px-2 fw-semibold">Prof. Kayden Rolfson I</span>
              </button>
              <div class="d-none gap-3 popover-content flex-column">
                <div class="d-flex mb-2 gap-2 m-0 align-items-center">
                  <img src="/assets/images/settings.svg" alt="" />
                  <p class="m-0">تنظیمات</p>
                </div>
                <div class="d-flex mb-2 gap-2 align-items-center">
                  <img src="/assets/images/hotels.svg" alt="" />
                  <p class="m-0">مدیریت هتل</p>
                </div>
                <div
                  class="d-flex mb-2 gap-2 align-items-center border-bottom pb-3"
                >
                  <img src="/assets/images/toggle.svg" alt="" />
                  <p class="m-0">لیست هتل ها</p>
                </div>
                <div class="d-flex gap-2 align-items-center">
                  <img src="/assets/images/logout.svg" alt="" />
                  <p class="m-0 text-danger">خروج</p>
                </div>
              </div>
  
              <div
                class="icon-bg mt-2 btn border-0 m-2 mt-0 rounded-5 mb-2 pad-2"
              >
                <img
                  class="btn p-0 border-0"
                  src="/assets/images/notification.svg"
                  alt=""
                />
              </div>
            </div>
          </nav>
        </header>
        `;
  }

  getLtrContent(url) {
    return `
        <header>
          <nav class="d-flex p-3 justify-content-between align-items-center">
            <div class="d-flex gap-2 align-items-center">
              <div class="icon-bg padx-4 border-0 mt-0 rounded-5">
                <img
                  class="btn p-0 border-0"
                  src="/assets/images/logo.svg"
                  alt=""
                  width="15"
                />
              </div>
              <form action="" class="me-3">
                <div class="search d-flex rounded-5">
                  <input
                    class="form-control shadow-none rounded-5 p-2 border-0"
                    placeholder="Reservation Search ... "
                    type="text"
                  />
                  <div class="bg-orange btn border-0 rounded-5 pad-3">
                    <img
                      width="25"
                      src="/assets/images/search-normal.svg"
                      alt=""
                    />
                  </div>
                </div>
              </form>
              <div
                class="icon-bg border-0 mt-0 rounded-5 pad-2 btn border-0 rounded-5 pad-2"
              >
                <img
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-pop"
                  data-bs-content="Calander"
                  src="/assets/images/calendar.svg"
                />
              </div>
              <div
                class="icon-bg border-0 mt-0 rounded-5 pad-2 btn border-0 rounded-5 pad-2"
              >
                <img
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-pop"
                  data-bs-content="Reservations"
                  src="/assets/images/book-saved.svg"
                />
              </div>
  
              <div
                class="icon-bg border-0 mt-0 rounded-5 pad-2 btn border-0 rounded-5 pad-2"
              >
                <img
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-pop"
                  data-bs-content="Add Reservation"
                  src="/assets/images/add.svg"
                />
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <div class="btn p-0 border-0">
                <div class="icon-bg border-0 mt-0 rounded-5 pad-2">
                  <img
                    type="button"
                    data-bs-toggle="popover"
                    data-bs-trigger="hover focus"
                    data-bs-placement="bottom"
                    data-bs-custom-class="focus-pop shadow-sm"
                    data-bs-content=""
                    class="popover-btn"
                    src="/assets/images/clipboard-text.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="d-none popover-content gap-3 flex-column">
                <p class="fw-bold">Active Reservation</p>
                <div
                  class="pad-9 d-flex justify-content-center align-items-center flex-column"
                >
                  <img class="data-svg" src="/assets/images/data.svg" alt="" />
                  <p class="text-gray-300 fw-semibold">No Data</p>
                </div>
              </div>
              <div class="icon-bg border-0 mt-0 rounded-5 pad-2">
                <a href="/${url}">
                  <img
                    type="button"
                    data-bs-toggle="popover"
                    data-bs-trigger="hover focus"
                    data-bs-placement="bottom"
                    data-bs-custom-class="custom-pop"
                    data-bs-content="Change Language "
                    src="/assets/images/language-circle.svg"
                    alt=""
                /></a>
              </div>
  
              <div
                class="icon-bg toggle-color-mode border-0 mt-0 rounded-5 pad-2"
              >
                <div>
                  <img
                    type="button"
                    data-bs-toggle="popover"
                    data-bs-trigger="hover focus"
                    data-bs-placement="bottom"
                    data-bs-custom-class="custom-pop"
                    data-bs-content="Dark / Light"
                    src="/assets/images/moon.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button
                type="button"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-placement="bottom"
                data-bs-custom-class="focus-pop"
                data-bs-content=""
                class="p-1 px-2 popover-btn border-0 hotel-profile-btn icon-bg rounded-5"
              >
                <img
                  width="40"
                  height="40"
                  class="d-inline"
                  src="/assets/images/espinas.png"
                  alt=""
                />
                <span class="px-2 fw-semibold">Prof. Kayden Rolfson I</span>
              </button>
              <div class="d-none popover-content gap-3 flex-column">
                <div class="d-flex mb-2 gap-2 m-0 align-items-center">
                  <img src="/assets/images/settings.svg" alt="" />
                  <p class="m-0">Settings</p>
                </div>
                <div class="d-flex mb-2 gap-2 m-0 align-items-center">
                  <img src="/assets/images/hotels.svg" alt="" />
                  <p class="m-0">Hotel management</p>
                </div>
                <div
                  class="d-flex mb-2 gap-2 align-items-center border-bottom pb-3"
                >
                  <img src="/assets/images/toggle.svg" alt="" />
                  <p class="m-0">Hotels list</p>
                </div>
                <div class="d-flex gap-2 align-items-center">
                  <img src="/assets/images/logout.svg" alt="" />
                  <p class="m-0 text-danger">Logout</p>
                </div>
              </div>
  
              <div
                class="icon-bg mt-2 btn border-0 m-2 mt-0 rounded-5 mb-2 pad-2"
              >
                <img
                  class="btn p-0 border-0"
                  src="/assets/images/notification.svg"
                  alt=""
                />
              </div>
            </div>
          </nav>
        </header>
        `;
  }
}

customElements.define("nav-bar", Navbar);
