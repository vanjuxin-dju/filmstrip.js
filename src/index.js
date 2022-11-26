import "./main.less";
import SlideShow from "./slideshow";
import Overlay from "./overlay";

let slideShow = new SlideShow();
let overlay = new Overlay(slideShow.slidesDirection);
overlay.addPreviousSlideClickListener(() => slideShow.previousSlide());
overlay.addNextSlideClickListener(() => slideShow.nextSlide());

const PREVIOUS_KEY_CODES = new Set(["ArrowLeft", "ArrowUp"]);
const NEXT_KEY_CODES = new Set(["ArrowRight", "ArrowDown", "Space", "Enter"]);
document.addEventListener("keyup", (event) => {
    if (PREVIOUS_KEY_CODES.has(event.code)) {
        slideShow.previousSlide();
    } else if (NEXT_KEY_CODES.has(event.code)) {
        slideShow.nextSlide();
    }
});

(function addMobileEventListeners(direction) {
    let touchStart = 0;
    let touchEnd = 0;
    
    const checkDirection = () => {
        if (touchEnd < touchStart) {
            slideShow.nextSlide();
        } else if (touchEnd > touchStart) {
            slideShow.previousSlide();
        }
    }

    document.addEventListener('touchstart', e => {
        touchStart = direction === "vertical" ? e.changedTouches[0].screenY : e.changedTouches[0].screenX;
    })

    document.addEventListener('touchend', e => {
        touchEnd = direction === "vertical" ? e.changedTouches[0].screenY : e.changedTouches[0].screenX;
        checkDirection();
    })
})(slideShow.slidesDirection);
