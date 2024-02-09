'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener('click', function () {
        openModal();
    });
}

buttonCloseModal.addEventListener('click', function () {
    closeModal();
});

overlay.addEventListener('click', function () {
    closeModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})

function openModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

function closeModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}













