export default class SlideShow {
    #currentSlide = 0;

    constructor(currentSlide) {
        this._slidesParent = document.getElementsByClassName("slides")[0];
        this._isLoop = !!(this._slidesParent.dataset.loop);
        if (this._isLoop) {
            let firstSlideCopy = this._slidesParent.children[0].cloneNode(true);
            this._slidesParent.append(firstSlideCopy);
        }

        this._slideshowStyle = this._slidesParent.classList.contains("slides-separate") ? "separate" : "filmstrip";
        if (this._slideshowStyle === "separate") {
            this._slidesDirection = this._slidesParent.classList.contains("slides-separate-up") ? "up" :
                                    this._slidesParent.classList.contains("slides-separate-right") ? "right" :
                                    this._slidesParent.classList.contains("slides-separate-left") ? "left" : "down";

        } else {
            this._slidesDirection = this._slidesParent.classList.contains("slides-filmstrip-horizontal") ? "horizontal" : "vertical";

            let slidesMainFormat = this._slidesParent.classList.contains("slide-format-4-3-landscape") ? "4:3-landscape" :
                                   this._slidesParent.classList.contains("slide-format-16-9-landscape") ? "16:9-landscape" :
                                   this._slidesParent.classList.contains("slide-format-4-3-portrait") ? "4:3-portrait" :
                                   this._slidesParent.classList.contains("slide-format-16-9-portrait") ? "16:9-portrait" :
                                   this._slidesParent.classList.contains("slide-format-square") ? "square" : "flexible";
            if (this.#hasSpecificFormat(this._slidesParent) && this._slidesParent.classList.contains("show-perforations")) {
                switch (slidesMainFormat) {
                    case "4:3-landscape":
                        this.#addPerforation(this._slidesDirection === "vertical" ? 4 : 8);
                        break;
                    
                    case "square":
                        this.#addPerforation(4);
                        break;

                    case "16:9-landscape":
                        this.#addPerforation(this._slidesDirection === "vertical" ? 3 : 12);
                        break;

                    case "4:3-portrait":
                        this.#addPerforation(this._slidesDirection === "vertical" ? 8 : 4);
                        break;

                    case "16:9-portrait":
                        this.#addPerforation(this._slidesDirection === "vertical" ? 12 : 3);
                        break;
                }
                
            }
        }

        this._automatedSwitchBetweenSlides = this._slidesParent.dataset.switchAfter;
        this.#setAutomatedSwitch();

        this._slidesCount = document.getElementsByClassName("slide").length;
        if (currentSlide && currentSlide > 1) {
            this.#currentSlide = currentSlide - 2;
            this.nextSlide();
        }
    }

    #addPerforation(count) {
        let slides = this._slidesParent.children;
        for (let i = 0; i < slides.length; i++) {
            if (this.#hasSpecificFormat(slides[i])) {
                return;
            }
        }

        for (let i = 0; i < slides.length; i++) {
            this.#addPerforationToSlide(slides[i], count)
        }
    }
    
    #addPerforationToSlide(slide, count) {
        let perforationWrapper = document.createElement("div");
        perforationWrapper.classList.add("perforation-wrapper");
        slide.append(perforationWrapper);
        for (let i = 1; i < count; i++) {
            perforationWrapper = perforationWrapper.cloneNode(false);
            slide.append(perforationWrapper);
        }
    }

    #hasSpecificFormat(element) {
        let classes = element.classList;
        return  classes.contains("slide-format-4-3-landscape") || 
                classes.contains("slide-format-16-9-landscape") ||
                classes.contains("slide-format-4-3-portrait") ||
                classes.contains("slide-format-16-9-portrait") ||
                classes.contains("slide-format-square");
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
                } else {
                    if (this._isLoop && this.isEnding()) {
                        this.#currentSlide = 0;
                        if (this._slidesDirection === "vertical") {
                            this._slidesParent.style.top = "0vh";
                        } else {
                            this._slidesParent.style.left = "0vw";
                        }
                    }
                }
            }, 20);
        };

        const animateSlideOffScreen = (reverse) => {
            setTimeout(() => {
                if (this._slidesDirection === "up") {
                    this._slidesParent.style.top = -(reverse ? 100 - i : i) + "vh";
                } else if (this._slidesDirection === "right") {
                    this._slidesParent.style.left = (reverse ? 100 - i : i) + "vw";
                } else if (this._slidesDirection === "left") {
                    this._slidesParent.style.left = -(reverse ? 100 - i : i) + "vw";
                } else {
                    this._slidesParent.style.top = (reverse ? 100 - i : i) + "vh";
                }

                if (i < scrollStep / 2) {
                    step++;
                } else {
                    if (step > 1) {
                        step--;
                    }
                }
                i += step;

                if (reverse) {
                    if (i <= scrollStep) {
                        animateSlideOffScreen(true);
                    } else {
                        if (this._isLoop && this.isEnding()) {
                            this.#currentSlide = 0;
                            if (this._slidesDirection === "up" || this._slidesDirection === "down") {
                                this._slidesParent.style.left = "0vw";
                            } else {
                                this._slidesParent.style.top = "0vh";
                            }
                        }
                    }
                } else {
                    if (i <= scrollStep) {
                        animateSlideOffScreen(false);
                    } else {
                        if (this._slidesDirection === "up" || this._slidesDirection === "down") {
                            this._slidesParent.style.left = (direction === "next" ? startingPoint - 100 : startingPoint + 100) + "vw";
                        } else {
                            this._slidesParent.style.top = (direction === "next" ? startingPoint - 100 : startingPoint + 100) + "vh";
                        }
                        
                        step = 1;
                        i = 1;
                        animateSlideOffScreen(true);
                    }
                }
            }, 20);
        };

        if (this._slideshowStyle === "separate") {
            animateSlideOffScreen();
        } else {
            animateScroll();
        }
        
    }

    #setAutomatedSwitch() {
        clearTimeout(this._timer);
        if (!this.isEnding()) {
            const currentSlideElement = this._slidesParent.children[this.#currentSlide];
            const time = currentSlideElement.dataset.switchAfter || this._automatedSwitchBetweenSlides;
            const timeNumber = parseInt(time);
            if (Number.isNaN(timeNumber) || timeNumber <= 0) {
                return;
            }
            this._timer = setTimeout(() => {
                this.nextSlide();
            }, timeNumber * 1000);
        }
    }

    previousSlide() {
        if (this.#currentSlide > 0) {
            this.#scrollSlide("previous");
            this.#currentSlide--;
            this.#setAutomatedSwitch();
        }
    }

    nextSlide() {
        if (this.#currentSlide + 1 < this._slidesCount) {
            this.#scrollSlide("next");
            this.#currentSlide++;
            this.#setAutomatedSwitch();
        }
    }

    get slidesDirection() {
        return this._slidesDirection;
    }

    isBeginning() {
        return this.#currentSlide === 0;
    }

    isEnding() {
        return this.#currentSlide + 1 === this._slidesCount;
    }
}