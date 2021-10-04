function openModal(event) {
    const target = event.target;
    const modal = document.querySelector(`#${target.dataset.open}`);
    const body = document.body;
    const bg = document.createElement('div');

    modal.style.display = 'block';
    bg.classList.add('modal-backdrop', 'fade');
    body.classList.add('modal-open');
    body.appendChild(bg);

    setTimeout(() => {
        bg.classList.add('show');
        modal.classList.add('show');
    }, 10);
}

function closeModal(event) {
    const target = event.target;
    const modal = target.closest('.modal');
    const bg = document.querySelector('.modal-backdrop');
    const body = document.body;

    modal.classList.remove('show');
    bg.classList.remove('show');
    body.classList.remove('modal-open');

    setTimeout(() => {
        body.removeChild(bg);
        modal.style.display = '';
    }, 150);
}

window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.open-modal-button');
    const closeButtons = document.querySelectorAll('.modal__close-btn');

    buttons.forEach(button => {
        button.addEventListener('click', openModal);
    })
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    })
});