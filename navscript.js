const toggleButton = document.getElementsByClassName("toggle-button")[0];
const toggle_1 = document.getElementsByClassName("toggle1")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbarLinks_1 = document.getElementsByClassName("navbar-links1")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active1");
});

toggle_1.addEventListener("click", () => {
  navbarLinks_1.classList.toggle("active2");
});

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active1");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active1");
  overlay.classList.add("active1");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active1");
  overlay.classList.remove("active1");
}

function GFG_click() {
  var gfg_down = document.getElementById("gfg_down");
  gfg_down.remove();
}

function hideOrShow() {
  var x = document.getElementById("gfg_down");
  x.style.display = "block";
}
