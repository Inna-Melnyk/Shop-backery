// const refs = {
//   openModalBtn: document.querySelector(".modal-btn-open"),
//   closeModalBtn: document.querySelector("modal-btn-close"),
//   modal: document.querySelector(".backdrop"),
// };

// const toggleModal = () => refs.modal.classList.toggle("is-hidden");

// refs.openModalBtn.addEventListener("click", toggleModal);
// refs.closeModalBtn.addEventListener("click", toggleModal);

const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);