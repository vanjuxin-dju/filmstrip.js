import Perforator from "./interfaces/Perforator";
import FilmstripDirection from "./util/FilmstripDirection";
import SlideFormat from "./util/SlideFormat";
import UTIL from "./util/Util";

const SLIDE_FORMAT_FLEXIBLE = "slide-format-flexible",
        PERFORATION_WRAPPER = "perforation-wrapper";

export default class FilmPerforator implements Perforator {
    public perforate(parent: HTMLElement, slidesMainFormat : SlideFormat, slidesDirection: FilmstripDirection) : void {
        switch (slidesMainFormat) {
            case SlideFormat.LANDSCAPE_4_3:
                this.addPerforation(parent, slidesDirection === FilmstripDirection.VERTICAL ? 4 : 8);
                break;
            
            case SlideFormat.SQUARE:
                this.addPerforation(parent, 4);
                break;

            case SlideFormat.LANDSCAPE_16_9:
                this.addPerforation(parent, slidesDirection === FilmstripDirection.VERTICAL ? 3 : 12);
                break;

            case SlideFormat.PORTRAIT_4_3:
                this.addPerforation(parent, slidesDirection === FilmstripDirection.VERTICAL ? 8 : 4);
                break;

            case SlideFormat.PORTRAIT_16_9:
                this.addPerforation(parent, slidesDirection === FilmstripDirection.VERTICAL ? 12 : 3);
                break;
        }
    }

    private addPerforation(parent: HTMLElement, count: number): void {
        let slides = parent.children;
        let slidesArray = Array.from(slides);
        let firstSlideIndexWithSpecificFormat = slidesArray.findIndex(slide => UTIL.hasSpecificFormat(slide) || slide.classList.contains(SLIDE_FORMAT_FLEXIBLE));

        if (firstSlideIndexWithSpecificFormat >= 0) {
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            this.addPerforationToSlide(slides[i], count);
        }
    }

    private addPerforationToSlide(slide: Element, count : number): void {
        let perforationWrapper: HTMLElement = document.createElement("div");
        perforationWrapper.classList.add(PERFORATION_WRAPPER);
        slide.append(perforationWrapper);
        for (let i = 1; i < count; i++) {
            perforationWrapper = perforationWrapper.cloneNode(false) as HTMLElement;
            slide.append(perforationWrapper);
        }
    }
}