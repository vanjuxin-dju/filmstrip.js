export default class SlideShow {
    constructor() {
        this.slidesParent = document.getElementsByClassName("slides")[0];
        this.slidesDirection = this.slidesParent.classList.contains("slides-horizontal") ? "horizontal" : "vertical";

        this.slides = document.getElementsByClassName("slide");
        const overlay = document.getElementsByClassName("overlay")[0];
        this.currentSlide = 0;

        overlay.children.previous.onclick = () => {
            if (this.currentSlide > 0) {
                this.scrollSlide("previous");
                this.currentSlide--;
            }
        };
        
        overlay.children.next.onclick = () => {
            if (this.currentSlide + 1 < this.slides.length) {
                this.scrollSlide("next");
                this.currentSlide++;
            }
        };
    }

    scrollSlide(direction) {
        const scrollStep = 100;
        const startingPoint = this.slidesDirection === "vertical" ? 
                                (this.slidesParent.style.top ? parseInt(this.slidesParent.style.top) : 0) : 
                                (this.slidesParent.style.left ? parseInt(this.slidesParent.style.left) : 0);
        let step = 1;
        let i = 1;
    
        const animateScroll = () => {
            setTimeout(() => {
                if (this.slidesDirection === "vertical") {
                    this.slidesParent.style.top = (direction === "next" ? startingPoint - i : startingPoint + i) + "vh";
                } else {
                    this.slidesParent.style.left = (direction === "next" ? startingPoint - i : startingPoint + i) + "vw";
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
}