document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const modal = () => {
    const registrationModal = document.querySelector('.registration__modal');
    const modal = document.querySelector('.modal');

    const escapeHandler = () => {
      if (event.code === "Escape") {
        modal.classList.remove('open');
        document.body.classList.remove('overflowHidden');
      }
    };

    const openModal = () => {
      const target = event.target;
      modal.classList.add('open'); // по клику добавляем клас open
      document.body.classList.add('overflowHidden');
      document.addEventListener('keydown', escapeHandler);
    };

    const closeModal = () => {
      modal.classList.remove('open');
      document.body.classList.remove('overflowHidden');
      document.removeEventListener('keydown', escapeHandler); // убрать оброботчик событий после закрытия
    };


    modal.addEventListener('click', (event) => {
      const target = event.target; // где был клик?
      if (target.classList.contains('modal__close') || target === modal) { // если нажатая кнопка имеет клас modal__close ИЛИ нажатая кнопка === modal
        closeModal();
      }
    });

    registrationModal.addEventListener('click', openModal)
  }

  modal();
})