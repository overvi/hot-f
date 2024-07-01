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
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style="--bs-modal-width: 28rem"
        >
          <div
            style="border-radius: 1rem; background: var(--card-bg)"
            class="modal-content border-0"
          >
            <div class="modal-header border-0" style="margin-right: auto">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="d-flex flex-wrap gap-5">
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img
                      width="116"
                      src="/assets/images/1661856616_هتل-پارسیان-کوثر.jpg"
                      alt=""
                    />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img
                      width="116"
                      src="/assets/images/636685697343706660.jpg"
                      alt=""
                    />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img
                      width="116"
                      src="/assets/images/094413447bozorg_shiraz1.jpg"
                      alt=""
                    />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img
                      width="116"
                      src="/assets/images/636685697343706660.jpg"
                      alt=""
                    />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img width="116" src="/assets/images/images.png" alt="" />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
              </div>
            </div>
            <button
              class="btn pt-1 hotel-submit text-white mt-4 mb-3 fs-5 mx-3"
              style="background: var(--bs-green-400); border-radius: 1rem"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
      <header dir="rtl">
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
                data-bs-toggle="popover-search"
                data-bs-trigger="hover focus"
                data-bs-placement="bottom"
                data-bs-custom-class="search-popover rounded-5 border-gray-900 shadow-sm"
                class="form-control search-inner-field popover-search-toggler shadow-none rounded-5 p-2 border-0"
                placeholder="  مدیریت رسرواسیون  ..."
                type="text"
              />

              <div class="bg-orange btn border-0 rounded-5 pad-3">
                <img width="25" src="/assets/images/search-normal.svg" alt="" />
              </div>
            </div>
          </form>
          <div class="d-none popover-search-content gap-3 flex-column">
            <div class="d-flex flex-column gap-2">
              <div
                class="d-flex search-item justify-content-between align-items-center"
              >
                <p class="m-0">13:20 - 2022/6/33</p>
                <p class="m-0"><span>Fdsdffd FDfd</span> رزرواسیون</p>
              </div>
              <div
                class="d-flex search-item justify-content-between align-items-center"
              >
                <p class="m-0">13:20 - 2022/6/33</p>
                <p class="m-0"><span>Fdsdffd FDfd</span> رزرواسیون</p>
              </div>
              <div
                class="d-flex search-item justify-content-between align-items-center"
              >
                <p class="m-0">13:20 - 2022/6/33</p>
                <p class="m-0"><span>Fdsdffd FDfd</span> رزرواسیون</p>
              </div>
              <div
                class="d-flex search-item justify-content-between align-items-center"
              >
                <p class="m-0">13:20 - 2022/6/33</p>
                <p class="m-0"><span>Fdsdffd FDfd</span> رزرواسیون</p>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center me-0 gap-2">
            <div class="btn p-0 border-0">
              <div class="icon-bg border-0 mt-0 rounded-5 pad-2">
                <img
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-pop"
                  data-bs-content="Calander"
                  src="/assets/images/calendar.svg"
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
            <div class="icon-bg border-0 mt-0 rounded-5 pad-2">
              <img
                type="button"
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-pop"
                data-bs-content="Change Language "
                src="/assets/images/book-saved.svg"
                alt=""
              />
            </div>
            <div class="icon-bg border-0 mt-0 rounded-5 pad-2">
              <div>
                <img
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-placement="bottom"
                  data-bs-custom-class="custom-pop"
                  data-bs-content="Add Reservation"
                  src="/assets/images/add.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center me-5 gap-2">
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
              data-bs-placement="bottom"
              data-bs-trigger="focus"
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
              <a
                href="/settings/"
                type="button"
                style="color: var(--bs-body-color)"
                class="d-flex mb-2 gap-2 m-0 align-items-center link-underline-opacity-0 link-underline-dark"
              >
                <img src="/assets/images/settings.svg" alt="" />
                <p class="m-0 d-block">تنظیمات</p>
              </a>

              <a
                href="/settings/hotels/"
                style="color: var(--bs-body-color)"
                class="d-flex mb-2 gap-2 align-items-center link-underline-opacity-0 link-underline-dark"
              >
                <img src="/assets/images/hotels.svg" alt="" />
                <p data-bs-trigger="hover focus" class="m-0">مدیریت هتل</p>
              </a>
              <div
                class="d-flex mb-2 gap-2 align-items-center border-bottom pb-3"
              >
                <a>
                  <img
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    src="/assets/images/toggle.svg"
                    alt=""
                  />
                </a>
                <p
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  class="m-0"
                >
                  لیست هتل ها
                </p>
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
       
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style="--bs-modal-width: 28rem"
        >
          <div
            style="border-radius: 1rem; background: var(--card-bg)"
            class="modal-content border-0"
          >
            <div class="modal-header border-0" style="margin-right: auto">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="d-flex flex-wrap gap-5">
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img
                      width="116"
                      src="/assets/images/1661856616_هتل-پارسیان-کوثر.jpg"
                      alt=""
                    />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img
                      width="116"
                      src="/assets/images/636685697343706660.jpg"
                      alt=""
                    />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img
                      width="116"
                      src="/assets/images/094413447bozorg_shiraz1.jpg"
                      alt=""
                    />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img
                      width="116"
                      src="/assets/images/636685697343706660.jpg"
                      alt=""
                    />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
                <div class="hotel-select">
                  <div class="hotel-outline">
                    <img width="116" src="/assets/images/images.png" alt="" />
                  </div>
                  <span class="text-center hotel-name d-block mt-3">
                    Ms. Ava Kris DVM
                  </span>
                </div>
              </div>
            </div>
            <button
              class="btn pt-1 hotel-submit text-white mt-4 mb-3 fs-5 mx-3"
              style="background: var(--bs-green-400); border-radius: 1rem"
            >
              Save
            </button>
          </div>
        </div>
      </div>
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
             <form action="">
            <div class="search d-flex rounded-5 p-0">
              <input
                data-bs-toggle="popover-search"
                data-bs-trigger="hover focus"
                data-bs-placement="bottom"
                data-bs-custom-class="search-popover-l search-popover rounded-5 border-gray-900 shadow-sm"
                class="form-control search-inner-field popover-search-toggler shadow-none rounded-5 p-2 border-0"
                placeholder="Search Reservation..."
                type="text"
              />

              <div class="bg-orange btn border-0 rounded-5 pad-3">
                <img width="25" src="/assets/images/search-normal.svg" alt="" />
              </div>
            </div>
          </form>
          <div class="d-none popover-search-content gap-3 flex-column">
            <div class="d-flex flex-column gap-2">
              <div
                class="d-flex search-item justify-content-between align-items-center"
              >
                <p class="m-0">13:20 - 2022/6/33</p>
                <p class="m-0"><span>Fdsdffd FDfd</span> رزرواسیون</p>
              </div>
              <div
                class="d-flex search-item justify-content-between align-items-center"
              >
                <p class="m-0">13:20 - 2022/6/33</p>
                <p class="m-0"><span>Fdsdffd FDfd</span> رزرواسیون</p>
              </div>
              <div
                class="d-flex search-item justify-content-between align-items-center"
              >
                <p class="m-0">13:20 - 2022/6/33</p>
                <p class="m-0"><span>Fdsdffd FDfd</span> رزرواسیون</p>
              </div>
              <div
                class="d-flex search-item justify-content-between align-items-center"
              >
                <p class="m-0">13:20 - 2022/6/33</p>
                <p class="m-0"><span>Fdsdffd FDfd</span> رزرواسیون</p>
              </div>
            </div>
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
              style="margin-right: 6rem"
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
              <a
                style="color: var(--bs-body-color)"
                href="/en/settings/"
                class="d-flex mb-2 gap-2 m-0 link-underline-opacity-0 link-underline-dark align-items-center"
              >
                <img src="/assets/images/settings.svg" alt="" />
                <p class="m-0">Settings</p>
              </a>
              <a
                style="color: var(--bs-body-color)"
                href="/en/settings/hotels/"
                class="d-flex link-underline-opacity-0 link-underline-dark mb-2 gap-2 m-0 align-items-center"
              >
                <img src="/assets/images/hotels.svg" alt="" />
                <p class="m-0">Hotel management</p>
              </a>
              <div
                class="d-flex mb-2 gap-2 align-items-center border-bottom pb-3"
              >
                <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src="/assets/images/toggle.svg" alt="" />
                </a>

                <p
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  class="m-0"
                >
                  Hotels list
                </p>
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
