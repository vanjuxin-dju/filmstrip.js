import "./styles/index.less";

import AutomatedSwitch from "./scripts/AutomatedSwitch";
import DiapositiveDirection from "./scripts/util/DiapositiveDirection";
import FilmstripDirection from "./scripts/util/FilmstripDirection";
import Overlay from "./scripts/Overlay";
import SlideShow from "./scripts/SlideShow";
import FilmPerforator from "./scripts/FilmPerforator";
import FilmOldificator from "./scripts/FilmOldificator";

const currentSlide = () : number => {
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

const slideShow = new SlideShow(currentSlide(), new FilmPerforator(), new FilmOldificator());
const overlay = new Overlay(slideShow.getSlidesDirection());
const automatedSwitch = new AutomatedSwitch(slideShow.getIsLoop());

const addAutomationSwitch = (): void => {
    let time = slideShow.getCurrentSlideSwitchAfter();
    if (Number.isNaN(time) || time <= 0) {
        time = slideShow.getDefaultTimeBetweenSlides();
    }

    if (Number.isNaN(time) || time <= 0) {
        return;
    }

    automatedSwitch.setAutomatedSwitch(slideShow.isEnding(), time, () => {
        nextSlide();
    })
}

const previousSlide = (): void => {
    automatedSwitch.clearAutomatedSwitch();
    slideShow.previousSlide((): void => {
        if (slideShow.isBeginning()) {
            overlay.disablePreviousButton();
        }
        if (!slideShow.isEnding()) {
            overlay.enableNextButton();
        }
        addAutomationSwitch();
    });
}
const nextSlide = (): void => {
    automatedSwitch.clearAutomatedSwitch();
    slideShow.nextSlide((): void => {
        if (!slideShow.isBeginning()) {
            overlay.enablePreviousButton();
        } else {
            overlay.disablePreviousButton();
        }
        if (slideShow.isEnding()) {
            overlay.disableNextButton();
        }
        addAutomationSwitch();
    });
}

overlay.addPreviousSlideClickListener(previousSlide);
overlay.addNextSlideClickListener(nextSlide);

if (slideShow.isBeginning()) {
    overlay.disablePreviousButton();
}
if (slideShow.isEnding()) {
    overlay.disableNextButton();
}
addAutomationSwitch();

const PREVIOUS_KEY_CODES = new Set(["ArrowLeft", "ArrowUp"]);
const NEXT_KEY_CODES = new Set(["ArrowRight", "ArrowDown", "Space", "Enter", "NumpadEnter"]);
document.addEventListener("keyup", (event: KeyboardEvent) => {
    if (PREVIOUS_KEY_CODES.has(event.code)) {
        previousSlide();
    } else if (NEXT_KEY_CODES.has(event.code)) {
        nextSlide();
    }
});

(function addMobileEventListeners(direction: FilmstripDirection | DiapositiveDirection) {
    let touchStart: number = 0;
    let touchEnd: number = 0;
    
    const checkDirection = (): void => {
        if (touchEnd < touchStart) {
            nextSlide();
        } else if (touchEnd > touchStart) {
            previousSlide();
        }
    }

    document.addEventListener('touchstart', (e: TouchEvent) => {
        touchStart = (direction === FilmstripDirection.VERTICAL || 
            direction === DiapositiveDirection.UP || 
            direction === DiapositiveDirection.DOWN) ? e.changedTouches[0].screenY : e.changedTouches[0].screenX;
    })

    document.addEventListener('touchend', (e: TouchEvent) => {
        touchEnd = (direction === FilmstripDirection.VERTICAL || 
            direction === DiapositiveDirection.UP || 
            direction === DiapositiveDirection.DOWN) ? e.changedTouches[0].screenY : e.changedTouches[0].screenX;
        checkDirection();
    })
})(slideShow.getSlidesDirection());
