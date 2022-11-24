import "./main.less";

let slides = document.getElementsByClassName("slide");

for (let i = 0; i < slides.length; i++) {
    slides[i].onclick = function(event) {
        const divider = window.innerHeight / 2;
        const point = event.clientY;
        if (point > divider) {
            if (i + 1 < slides.length) {
                nextSlide();
            }
        } else {
            if (i > 0) {
                previousSlide();
            }
        }
    }
}

function nextSlide() {
    const scrollStep = 100;
    const slidesContainer = document.getElementsByClassName("slides")[0];
    const startingPoint = slidesContainer.style.top ? parseInt(slidesContainer.style.top) : 0;
    let step = 1;
    let i = 1;

    const animateScroll = () => {
        setTimeout(() => {
            slidesContainer.style.top = (startingPoint - i) + "vh";
            if (i < scrollStep / 2) {
                step++;
            } else {
                if (step > 1) {
                    step--;
                }
            }
            i += step;
            if (i <= scrollStep) {
                animateScroll();
            }
        }, 20);
    };

    animateScroll();
}

function previousSlide() {
    const scrollStep = 100;
    const slidesContainer = document.getElementsByClassName("slides")[0];
    const startingPoint = slidesContainer.style.top ? parseInt(slidesContainer.style.top) : 0;
    let step = 1;
    let i = 1;

    const animateScroll = () => {
        setTimeout(() => {
            slidesContainer.style.top = (startingPoint + i) + "vh";
            if (i < scrollStep / 2) {
                step++;
            } else {
                if (step > 1) {
                    step--;
                }
            }
            i += step;
            if (i <= scrollStep) {
                animateScroll();
            }
        }, 20);
    };

    animateScroll();
}