window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel__track');
    const cards = document.querySelectorAll('.card');

    cards[0].classList.add('card--active');

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            cards.forEach(otherCard => otherCard.classList.remove('card--active'));
            card.classList.add('card--active');

            track.style.transform = `translateX(-${239*index}px)`;
        })
    });
});