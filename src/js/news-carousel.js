const initCarousel = () => {
    const newsCarousel = document.querySelectorAll(".news-carousel .container");
    const viewportSizes = {
      md: 768,
      lg: 992
    };
    let cardPerView = 1; // Amount of cards to show
    const cardGutter = 30; // Gutter size between the cards
    const cardSizeDelta = 20;
    const viewportWidth = window.outerWidth;
  
    if (viewportWidth >= viewportSizes.md && viewportWidth < viewportSizes.lg) {
      cardPerView = 2;
    } else if (viewportWidth >= viewportSizes.lg) {
      cardPerView = 3;
    }
  
    newsCarousel.forEach((element) => {
      const carouselContainer = element.querySelector(".news-carousel__cards"); // List of cards (<ul>)
      const buttonsLeft = element.querySelectorAll(".controls__button.controls__button--left");
      const buttonsRight = element.querySelectorAll(".controls__button.controls__button--right");
      const carouselCardsList = carouselContainer.querySelectorAll(".news-carousel__card"); // Each card (<li>)
      const cardAmount = carouselCardsList.length;
      const computedStyle = getComputedStyle(element);
      const elementWidth = element.clientWidth;
      const elementPaddingLeft = parseFloat(computedStyle.paddingLeft);
      const elementPaddingRight = parseFloat(computedStyle.paddingRight);
      const containerWidth = elementWidth - (elementPaddingLeft + elementPaddingRight);
      const cardWidth = (containerWidth / cardPerView) - cardSizeDelta;
      const carouselContainerWidth = (cardWidth * cardAmount) + (cardGutter * (cardAmount - 1));
      let carouselIndex = 0;
      let carouselMovement = 0;
  
      carouselContainer.style.width = `${carouselContainerWidth}px`;
  
      const moveCarousel = (direction) => {
        const nextIndex = carouselIndex - direction;
        const shouldMove = nextIndex > -1 && nextIndex <= cardAmount - cardPerView;
        if (shouldMove) {
          const cardSize = carouselCardsList[0].offsetWidth;
          const movement = carouselMovement + (direction * cardSize);
          carouselContainer.style.transform = `translateX(${movement}px)`;
          carouselIndex -= direction;
          carouselMovement = movement;
  
          if (carouselIndex === 0) {
            buttonsLeft.forEach((button) => {
              button.classList.add("controls__button--disabled");
              button.setAttribute("disabled", true);
            });
          } else if (carouselIndex > 0) {
            buttonsLeft.forEach((button) => {
              button.classList.remove("controls__button--disabled");
              button.removeAttribute("disabled");
            });
          }
  
          if (carouselIndex + 1 <= cardAmount - cardPerView) {
            buttonsRight.forEach((button) => {
              button.classList.remove("controls__button--disabled");
              button.removeAttribute("disabled");
            });
          } else {
            buttonsRight.forEach((button) => {
              button.classList.add("controls__button--disabled");
              button.setAttribute("disabled", true);
            });
          }
        }
      };
  
      buttonsLeft.forEach((button) => {
        button.addEventListener("click", () => {
          moveCarousel(1);
        });
      });
  
      buttonsRight.forEach((button) => {
        button.addEventListener("click", () => {
          moveCarousel(-1);
        });
      });
    });
  };
  
  window.addEventListener("resize", initCarousel);
  
  initCarousel();