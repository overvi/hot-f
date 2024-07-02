class ExpandedSideBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const direction = this.getAttribute("dir") || "ltr";

    const content =
      direction === "rtl" ? this.getRtlContent() : this.getLtrContent();

    this.innerHTML = content;
    this.highlightCurrentPage();
  }

  getRtlContent() {
    return `
         <div>
            <div
              style="
                border-top-right-radius: 2rem;
                border-bottom-right-radius: 2rem;
                border-top-left-radius: 2rem;
                width: 19rem;
              "
              class="side-bar position-fixed overflow-hidden container mx-3 px-1 px-0"
            >
              <div class="row">
                <div  class="sidebar-tabs   col-2 d-flex flex-column gap-5">
                <a href="/" class="me-2">
                <img
                  style="margin-top: 6rem"
                  width="28"
                  src="/assets/images/toggle.svg"
                  alt=""
                />
                </a>
                  <div 
                    style="width: fit-content;"
                    class="active-tab"
                  >
                <a href="/pms/roomtype" >
                  <img width="28" src="/assets/images/hotels.svg" alt="" />
                  </a>                  </div>
                  <a href="/crs/" class="me-2">
                  
                  <img width="28" src="/assets/images/calendar.svg" alt="" />
                  </a>

                  <a href="/finance/transactions">
                  
                  <img 
                  class="me-2"
                    width="28"
                    src="/assets/images/dollar-circle.svg"
                    alt=""
                  />
                  </a>
                  <div>
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
                <div
                  style="height: 33rem; width: 16.2rem"
                  class="col-3 overflow-y-scroll sidebar-scroll"
                >
                  <div class="px-3 mt-3">
                    <h1>مدیریت هتل</h1>
                    <p>نوع اتاق</p>
                  </div>
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          مدیریت اتاق ها
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse fw-semibold fw-semibold collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="py-2">
                        
                      
                        <a  href="/pms/roomtype"  class="btn px-5   nav-a border-0 d-block"> نوع اتاق</a>
                            <a  href="/pms/rooms"  class="btn px-5  nav-a border-0 d-block">اتاق ها</a>
                            <a  href="/pms/amenities" class="btn nav-a border-0 px-5">امکانات اتاق</a>
                       
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          خدمات اتاق
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse fw-semibold collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div  class=" py-2">
                          <a class="btn  nav-a d-block d-flex justify-content-between gap-5">
                          <span class="text-gray-500 ">خشکشویی</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      به زودی
                      </span>
                          
                          </a>
                      <a class="btn  nav-a  d-flex justify-content-between ">
                          <span class="text-gray-500 m-0 ">نظافت چی</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      به زودی
                      </span>
                          
                          </a>  
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          مدیریت امکانات
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse fw-semibold collapse py-3 "
                        data-bs-parent="#accordionExample"
                      >
                             </a>
                      <a class="btn  nav-a  d-flex justify-content-between ">
                          <span class="text-gray-500 m-0 "> ترانسفر</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      به زودی
                      </span>
                          
                          </a> 
                             </a>
                      <a class="btn  nav-a  d-flex justify-content-between ">
                          <span class="text-gray-500 m-0 "> استخر</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      به زودی
                      </span>
                          
                          </a> 
                             </a>
                      <a class="btn  nav-a  d-flex justify-content-between ">
                          <span class="text-gray-500 m-0 "> باشگاه</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      به زودی
                      </span>
                          
                          </a> 
                             </a>
                      <a class="btn  nav-a  d-flex justify-content-between ">
                          <span class="text-gray-500 m-0 ">سالن اجتماعات </span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      به زودی
                      </span>
                          
                          </a> 
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          مدیریت نرخ
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        class="accordion-collapse fw-semibold collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class=" py-2">
                          <a  href="/pms/rate"  class="btn px-5 nav-a border-0 d-block"> نرخ</a>

                         <a  href="/pms/coupon"  class="btn px-5 nav-a border-0 d-block"> کوپن</a>

                          <a  href="/pms/addons"  class="btn px-5 nav-a border-0 d-block"> Extra Services </a>

                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <a href="/pms/guests" class="fw-semibold btn nav-a border-0 fs-6 ">
                     
                        
                   <span>مدیریت مهمان ها</span>
                      
                      </a>
                  
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          انبار
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        class="accordion-collapse fw-semibold collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class=" py-2">
                          <a  href="/pms/category"  class="btn nav-a px-5 border-0 d-block"> دسته بندی</a>
                         <a  href="/pms/suppliers"  class="btn nav-a px-5 border-0 d-block"> تامین کنندگان</a>
                         <a  href="/pms/warehouse"  class="btn nav-a px-5 border-0 d-block"> انبار</a>
                         <a  href="/pms/minibar"  class="btn nav-a px-5 border-0 d-block"> مینی بار</a>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-2 py-3">
                    <img src="/assets/images/logo-per.svg" alt="" />
                    <p>
                      برای استفاده از ابزارهای پیشرفته می‌توانید از بسته حرفه ای
                      منگوتلز استفاده کنید.
                    </p>
                    <a href="/subscription" class="btn btn-warning w-100 rounded-5">
                      پیشرفته
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M2 15.29V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76-.01-5-2.25-5-5.01Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `;
  }

  getLtrContent() {
    return `
       <div>
            <div
              style="
                border-top-left-radius: 2rem;
                border-bottom-left-radius: 2rem;
                border-top-right-radius: 2rem;
                width: 19rem;
              "
              class="side-bar position-fixed overflow-hidden container mx-3 px-1 px-0 col-2"
            >
              <div class="row">
                <div class="sidebar-tabs  col-2 d-flex flex-column gap-5">
                   <a href="/en/" class="offset-3">
                <img
                  style="margin-top: 6rem"
                  width="28"
                  src="/assets/images/toggle.svg"
                  alt=""
                />
                </a>
                  <div
                    style="width: fit-content; padding: 0.3rem"
                    class="active-tab"
                  >
                  <a href="/en/pms/roomtype">
                  <img width="28" src="/assets/images/hotels.svg" alt="" />
                  </a>
                  </div>
                  <a href="/en/crs/" class="offset-3">
                  
                  <img width="28" src="/assets/images/calendar.svg" alt="" />
                  </a>
                 <a href="/en/finance/transactions">
                  
                  <img 
                  class="offset-3"
                    width="28"
                    src="/assets/images/dollar-circle.svg"
                    alt=""
                  />
                  </a>
                  <div>
                    <div class="border-0 mt-0 rounded-5 ">
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
                <div
                  style="height: 33rem; width: 16.2rem"
                  class="col-3 sidebar-scroll overflow-y-scroll"
                >
                  <div class="px-3 mt-3">
                    <h1>Property management system</h1>
                    <p>نوع اتاق</p>
                  </div>
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Room Management
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse fw-semibold fw-semibold collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="py-2">
                          <a  href="/en/pms/roomtype"   class="btn nav-a px-5 text-left border-0 d-block">Room Types</a>
                            <a   href="/en/pms/rooms"   class="btn px-5 text-left nav-a border-0 d-block">Rooms</a>
                             <a href="/en/pms/amenities"   class="btn px-5 text-left nav-a border-0 d-block">Amenities</a>
                         
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Room Services
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse fw-semibold collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="px-2 py-2">
                             <a class="btn  nav-a d-block d-flex justify-content-between gap-5">
                          <span class="text-gray-500 ">Laundry</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      Soon
                      </span>
                          
                          </a>
                      <a class="btn  nav-a  d-flex justify-content-between ">
                          <span class="text-gray-500 m-0 ">Housekeeping</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      Soon 
                      </span>
                          
                          </a> 
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Facilities management
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse fw-semibold collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="px-2 py-2">
                          <a class="btn  nav-a d-block d-flex justify-content-between gap-5">
                          <span class="text-gray-500 ">Transfer</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      Soon
                      </span>
                          
                          </a>
                      <a class="btn  nav-a  d-flex justify-content-between ">
                          <span class="text-gray-500 m-0 ">Pool</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      Soon 
                      </span>
                          
                          </a>      <a class="btn  nav-a d-block d-flex justify-content-between gap-5">
                          <span class="text-gray-500 ">Gym</span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      Soon
                      </span>
                          
                          </a>
                      <a class="btn  nav-a  d-flex justify-content-between ">
                          <span class="text-gray-500 m-0 ">Conference hall </span>
                          <span
                        class="badge badge m-0 text-bg-danger bg-opacity-10 border-danger rounded-5 text-danger"
                      >
                      Soon 
                      </span>
                          
                          </a> 
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Rate management
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        class="accordion-collapse fw-semibold collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class=" py-2">
                        <a   href="/en/pms/rate"   class="btn px-5 text-left nav-a border-0 d-block">Rate</a>
                        <a   href="/en/pms/coupon"   class="btn px-5 text-left nav-a border-0 d-block">Coupon</a>
                        <a   href="/en/pms/addons"   class="btn px-5 text-left nav-a border-0 d-block">Extra Services</a>

                        </div>
                      </div>
                    </div>
                    <a style="padding-inline : 1rem" href="/en/pms/guests" class="fw-semibold nav-a btn border-0 fs-6 ">
                     
                        
                   <span>  Guest Mangement</span>
                      
                      </a>
                  
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button fw-semibold fs-6 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Warehouse
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        class="accordion-collapse fw-semibold collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class=" py-2">
                        <a   href="/en/pms/category"   class="btn px-5 text-left nav-a border-0 d-block">Category</a>
                        <a   href="/en/pms/suppliers"   class="btn px-5 text-left nav-a border-0 d-block">Suppliers</a>
                        <a   href="/en/pms/warehouse"   class="btn px-5 text-left nav-a border-0 d-block">Warehouse</a>
                        <a   href="/en/pms/minibar"   class="btn px-5 text-left nav-a border-0 d-block">Minibar</a>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-2 py-3">
                    <img src="/assets/images/logo-per.svg" alt="" />
                    <p>
                      Heroes, feature sections, newsletter sign up forms — all
                      of the components you need to build beautiful marketing
                      websites.
                    </p>
                    <a href="/en/subscription" class="btn btn-warning w-100 rounded-5">
                      Advanced
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M2 15.29V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76-.01-5-2.25-5-5.01Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
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
      const buttons = document.querySelectorAll(".accordion-button");
      const collapses = document.querySelectorAll(".accordion-collapse");

      collapses.forEach((collapse, index) => {
        const navItems = collapse.querySelectorAll(".nav-a");

        navItems.forEach((item) => {
          const normalizedCurrentPage = currentPage.endsWith("/")
            ? currentPage.slice(0, -1)
            : currentPage;

          const normalizedItemPathname = item.pathname.endsWith("/")
            ? item.pathname.slice(0, -1)
            : item.pathname;

          console.log(
            "Item Pathname:",
            item.pathname,
            "Normalized:",
            normalizedItemPathname
          );

          if (
            normalizedCurrentPage.includes("add/") ||
            normalizedCurrentPage.includes("guests")
          ) {
            buttons.forEach((btn) => {
              btn.classList.add("collapsed");
            });

            collapses.forEach((collapseItem) => {
              collapseItem.classList.remove("show");
            });
          } else if (normalizedItemPathname === normalizedCurrentPage) {
            buttons.forEach((btn) => {
              btn.classList.add("collapsed");
            });

            collapses.forEach((collapseItem) => {
              collapseItem.classList.remove("show");
            });

            collapse.classList.add("show");

            if (buttons[index]) {
              buttons[index].classList.remove("collapsed");
            }
          }
        });
      });

      document.querySelectorAll(".nav-a").forEach((link) => {
        if (currentPage.includes(link.pathname)) {
          link.classList.add("active-page");
        }
      });
    }
  }
}

customElements.define("side-bar-expanded", ExpandedSideBar);
