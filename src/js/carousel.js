window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel__track');
    const cards = document.querySelectorAll('.card');

    cards[0].classList.add('card--active');

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if(card.classList.contains('card--active'))return;
            const inactiveCardSize = card.clientWidth + 16;

            cards.forEach(otherCard => otherCard.classList.remove('card--active'));
            
            track.style.transform = `translateX(-${inactiveCardSize*index}px)`;
            card.classList.add('card--active');

        })
    });
});