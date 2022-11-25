import "./main.less";

let slidesParent = document.getElementsByClassName("slides")[0];
let slidesDirection = slidesParent.classList.contains("slides-horizontal") ? "horizontal" : "vertical";

let slides = document.getElementsByClassName("slide");
let overlay = document.getElementsByClassName("overlay")[0];
let currentSlide = 0;

overlay.children.previous.onclick = (event) => {
    if (currentSlide > 0) {
        scrollSlide("previous");
        currentSlide--;
    }
};

overlay.children.next.onclick = (event) => {
    if (currentSlide + 1 < slides.length) {
        scrollSlide("next");
        currentSlide++;
    }
}

const scrollSlide = (direction) => {
    const scrollStep = 100;
    const startingPoint = slidesDirection === "vertical" ? 
                            (slidesParent.style.top ? parseInt(slidesParent.style.top) : 0) : 
                            (slidesParent.style.left ? parseInt(slidesParent.style.left) : 0);
    let step = 1;
    let i = 1;

    const animateScroll = () => {
        setTimeout(() => {
            if (slidesDirection === "vertical") {
                slidesParent.style.top = (direction === "next" ? startingPoint - i : startingPoint + i) + "vh";
            } else {
                slidesParent.style.left = (direction === "next" ? startingPoint - i : startingPoint + i) + "vw";
            }

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

