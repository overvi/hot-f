class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const direction = this.getAttribute("direction") || "ltr";
    const url = this.getAttribute("url") || "";

    const content =
      direction === "rtl" ? this.getRtlContent(url) : this.getLtrContent(url);

    this.innerHTML = content;
    this.highlightCurrentPage();
  }

  getRtlContent(url) {
    return `
             <div
        style="border-radius: 2rem; width: 3.2rem; min-width: 3.2rem; right: 0"
        class="side-bar pb-3 position-fixed container mx-3 px-1 px-0"
      >
        <div class="row">
          <div class="sidebar-tabs col-2 d-flex flex-column gap-5">
            <a
            href="/"
              style="
                width: fit-content;
                margin-left: 0.5rem;
                margin-top: 6rem;
              "
              class=" side-tab"
            >
              <img width="28" src="/assets/images/toggle.svg" alt="" />
            </a>

            <a href="/pms/roomtype/">
              <img
                style="margin-left: 0.5rem"
                width="28"
                src="/assets/images/hotels.svg"
                alt=""
              />
            </a>
            <a
              href="/crs/"
              
              style="
                width: fit-content;
                margin-left: 0.5rem;
                width="28";
              "
              class="side-tab"
            >
              <img width="28" src="/assets/images/calendar.svg" alt="" />
            </a>
                <a href="/finance/transactions">
            
            <img
              style="margin-left: 0.5rem"
              width="28"
              src="/assets/images/dollar-circle.svg"
              alt=""
            />
            </a>
            <div style="margin-left: 0.4rem">
              <div class="border-0 mt-0 rounded-5">
                <img
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="focus"
                  tabindex="0"
                  data-bs-placement="left"
                  data-bs-custom-class="focus-pop shadow-lg w-15"
                  data-bs-content=""
                  class="popover-btn"
                  width="35"
                  style="margin-top : 1rem"
                  src="/assets/images/profile.svg"
                  alt=""
                />
              </div>

              <div class="d-none popover-content flex-column">
                <div>
                        <a href="/settings/profile" class="border-bottom link-body-emphasis d-block pb-3 link-underline link-underline-opacity-0">پروفایل</a>
                        <p class="text-danger m-0 pt-3">خروج</p>
                      </div>
              </div>
              <div
                style="width: fit-content; padding: 0.3rem"
                class="logout-btn mt-4 rounded-5 border-0 border-start"
              >
                <img width="25" src="/assets/images/lgout.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
          `;
  }

  getLtrContent(url) {
    return `
            <div
        style="border-radius: 2rem; width: 3.2rem; min-width: 3.2rem; left: 0"
        class="side-bar pb-3 position-fixed container mx-3 px-1 px-0"
      >
        <div class="row">
          <div class="sidebar-tabs col-2 d-flex flex-column gap-5">
              <a
            href="/en/"
              style="
                width: fit-content;
                margin-left: 0.5rem;
                margin-top: 6rem;
              "
              class="side-tab"
            >
              <img width="28" src="/assets/images/toggle.svg" alt="" />
            </a>

            <a href="/en/pms/roomtype/">
              <img
                style="margin-left: 0.5rem"
                width="28"
                src="/assets/images/hotels.svg"
                alt=""
              />
            </a>

              <a
              href="/en/crs/"
              
              style="
                width: fit-content;
                margin-left: 0.5rem;
                width="28";
              "
              class="side-tab"
            >
              <img width="28" src="/assets/images/calendar.svg" alt="" />
            </a>

            <a href="/en/finance/transactions">
            
            <img
              style="margin-left: 0.5rem"
              width="28"
              src="/assets/images/dollar-circle.svg"
              alt=""
            />
            </a>
            <div style="margin-left: 0.4rem">
              <div class="border-0 mt-0 rounded-5">
                <img
                  type="button"
                  data-bs-toggle="popover"
                  data-bs-trigger="hover focus"
                  data-bs-placement="left"
                  data-bs-custom-class="focus-pop shadow-lg w-15"
                  data-bs-content=""
                  tabindex="0"
                  class="popover-btn"
                  width="35"
                  src="/assets/images/profile.svg"
                  alt=""
                />
              </div>

              <div class="d-none popover-content flex-column">
              <div class="fw-semibold">
                        <a href="/en/settings/profile" class="border-bottom link-underline-opacity-0 link-body-emphasis d-block pb-3">Profile</a>
                        <p class="text-danger m-0 pt-3">Exit</p>
                      </div>
              </div>
              <div
                style="width: fit-content; padding: 0.3rem"
                class="logout-btn mt-4 rounded-5 border-0 border-start"
              >
                <img width="25" src="/assets/images/lgout.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
          `;
  }

  highlightCurrentPage() {
    const currentPage = window.location.pathname;

    if (currentPage) {
      document.querySelectorAll(".side-tab").forEach((link) => {
        console.log(link.pathname, currentPage);
        if (link.pathname == currentPage) {
          link.classList.add("active-tab");
          link.classList.add("active-item");
        }
      });
    }
  }
}

customElements.define("side-bar", Sidebar);
