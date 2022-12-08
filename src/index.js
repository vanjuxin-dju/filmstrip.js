import "./main.less";
import "./slide-styles.less";
import SlideShow from "./slideshow";
import Overlay from "./overlay";

const currentSlide = () => {
    let hash = window.location.hash;
    hash = hash ? hash.substring(1) : hash;
    const currentSlide = parseInt(hash);
    window.location.hash = '';
    if(Number.isNaN(currentSlide)) {
        return 1;
    } else {
        return currentSlide;
    }
}

let slideShow = new SlideShow(currentSlide());
let overlay = new Overlay(slideShow.slidesDirection);
const previousSlide = () => {
    slideShow.previousSlide();
    if (slideShow.isBeginning()) {
        overlay.disablePreviousButton();
    }
    if (overlay.isDisabledNextButton()) {
        overlay.enableNextButton();
    }
}
const nextSlide = () => {
    slideShow.nextSlide();
    if (slideShow.isEnding()) {
        overlay.disableNextButton();
    }
    if (overlay.isDisabledPreviousButton()) {
        overlay.enablePreviousButton();
    }
}

overlay.addPreviousSlideClickListener(previousSlide);
overlay.addNextSlideClickListener(nextSlide);

if (slideShow.isBeginning()) {
    overlay.disablePreviousButton();
}
if (slideShow.isEnding()) {
    overlay.disableNextButton();
}

const PREVIOUS_KEY_CODES = new Set(["ArrowLeft", "ArrowUp"]);
const NEXT_KEY_CODES = new Set(["ArrowRight", "ArrowDown", "Space", "Enter", "NumpadEnter"]);
document.addEventListener("keyup", (event) => {
    if (PREVIOUS_KEY_CODES.has(event.code)) {
        previousSlide();
    } else if (NEXT_KEY_CODES.has(event.code)) {
        nextSlide();
    }
});

(function addMobileEventListeners(direction) {
    let touchStart = 0;
    let touchEnd = 0;
    
    const checkDirection = () => {
        if (touchEnd < touchStart) {
            nextSlide();
        } else if (touchEnd > touchStart) {
            previousSlide();
        }
    }

    document.addEventListener('touchstart', e => {
        touchStart = (direction === "vertical" || direction === "up" || direction === "down") ? e.changedTouches[0].screenY : e.changedTouches[0].screenX;
    })

    document.addEventListener('touchend', e => {
        touchEnd = (direction === "vertical" || direction === "up" || direction === "down") ? e.changedTouches[0].screenY : e.changedTouches[0].screenX;
        checkDirection();
    })
})(slideShow.slidesDirection);

