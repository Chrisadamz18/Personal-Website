"use strict";

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// Testimonials modal
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

const testimonialsModalFunc = function () {
  if (modalContainer) modalContainer.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    if (modalImg)
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    if (modalImg)
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    if (modalTitle)
      modalTitle.innerHTML = this.querySelector(
        "[data-testimonials-title]"
      ).innerHTML;
    if (modalText)
      modalText.innerHTML = this.querySelector(
        "[data-testimonials-text]"
      ).innerHTML;

    const testimonialDate = this.querySelector("[data-testimonials-date]");
    if (modalDate && testimonialDate) {
      modalDate.innerHTML = testimonialDate.innerHTML;
      modalDate.setAttribute(
        "datetime",
        testimonialDate.getAttribute("datetime")
      );
    }

    testimonialsModalFunc();
  });
}

if (modalCloseBtn)
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// Project Modal and Filter Functionality
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const filterDropdownItems = document.querySelectorAll("[data-select-item]");
  const projectItems = document.querySelectorAll(".project-item");
  const modalTriggers = document.querySelectorAll(".project-link");
  const modals = document.querySelectorAll(".modal-container");
  const closeModalButtons = document.querySelectorAll(".modal-close-btn");
  const modalOverlays = document.querySelectorAll(".overlay");
  const filterSelect = document.querySelector("[data-select]");
  const selectValue = document.querySelector("[data-select-value]");



  // Filter Functionality
  function filterProjects(category) {
    const normalizedCategory = category.toLowerCase();
    projectItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category").toLowerCase();
      if (normalizedCategory === "all" || normalizedCategory === itemCategory) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.target.textContent.trim();
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      if (selectValue) selectValue.textContent = category;
      filterProjects(category);
    });
  });

  if (filterSelect && selectValue && filterDropdownItems.length > 0) {
    filterDropdownItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const category = e.target.textContent.trim();
        selectValue.textContent = category;
        filterButtons.forEach((btn) => {
          if (btn.textContent.trim().toLowerCase() === category.toLowerCase()) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
        filterProjects(category);
        filterSelect.classList.remove("active");
      });
    });

    filterSelect.addEventListener("click", () => {
      filterSelect.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      const selectList = document.querySelector(".select-list");
      if (
        selectList &&
        !filterSelect.contains(e.target) &&
        !selectList.contains(e.target)
      ) {
        filterSelect.classList.remove("active");
      }
    });
  }

  // Modal Functionality with Debugging
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = trigger.getAttribute("data-project-id");
      const targetModal = document.querySelector(
        `.modal-container[data-modal-container="${projectId}"]`
      );
      
      if (targetModal) {
        targetModal.classList.add("active");
        
        const overlay = targetModal.querySelector(".overlay");
        if (overlay) {
          overlay.classList.add("active");
         
        } else {
         
        }
      } else {
        
      }
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal-container");
      if (modal) {
        modal.classList.remove("active");
        const overlay = modal.querySelector(".overlay");
        if (overlay) overlay.classList.remove("active");
      }
    });
  });

  modalOverlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      const modal = overlay.closest(".modal-container");
      if (modal) {
        modal.classList.remove("active");
        overlay.classList.remove("active");
      }
    });
  });

  const initialActiveButton = document.querySelector(
    "[data-filter-btn].active"
  );
  if (initialActiveButton && selectValue) {
    const initialCategory = initialActiveButton.textContent.trim();
    selectValue.textContent = initialCategory;
    filterProjects(initialCategory);
  }
});

// Contact form
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}
