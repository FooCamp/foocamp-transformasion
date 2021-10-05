window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel__track');
    const cards = document.querySelectorAll('.card');

    cards[0].classList.add('card--active');
    const button = document.querySelector('.carousel__button');
    button.innerText = cards[0].dataset.buttonLabel;
    button.setAttribute('href', cards[0].dataset.buttonUrl);

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if(card.classList.contains('card--active'))return;

            const marginCard = parseFloat(getComputedStyle(card).marginLeft);
            const inactiveCardSize = card.clientWidth + (marginCard * 2);
            
            let buttonUrl = card.dataset.buttonUrl;
            let buttonLabel = card.dataset.buttonLabel;
            button.innerText = buttonLabel;
            button.setAttribute('href', buttonUrl);

            cards.forEach(otherCard => otherCard.classList.remove('card--active'));
            
            track.style.transform = `translateX(-${inactiveCardSize*index}px)`;
            card.classList.add('card--active');

        })
    });
});