export default class SlideShow {
    #currentSlide = 0;

    constructor() {
        this._slidesParent = document.getElementsByClassName("slides")[0];
        this._slidesDirection = this._slidesParent.classList.contains("slides-horizontal") ? "horizontal" : "vertical";
        this._slidesCount = document.getElementsByClassName("slide").length;
    }

    #scrollSlide(direction) {
        const scrollStep = 100;
        const startingPoint = this.#currentSlide * (-100);
        let step = 1;
        let i = 1;
    
        const animateScroll = () => {
            setTimeout(() => {
                if (this._slidesDirection === "vertical") {
                    this._slidesParent.style.top = (direction === "next" ? startingPoint - i : startingPoint + i) + "vh";
                } else {
                    this._slidesParent.style.left = (direction === "next" ? startingPoint - i : startingPoint + i) + "vw";
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

    previousSlide() {
        if (this.#currentSlide > 0) {
            this.#scrollSlide("previous");
            this.#currentSlide--;
        }
    }

    nextSlide() {
        if (this.#currentSlide + 1 < this._slidesCount) {
            this.#scrollSlide("next");
            this.#currentSlide++;
        }
    }

    get slidesDirection() {
        return this._slidesDirection;
    }
}