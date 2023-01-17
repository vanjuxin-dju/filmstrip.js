import DiapositiveDirection from "./util/DiapositiveDirection";
import FilmstripDirection from "./util/FilmstripDirection";
import { PREVIOUS, NEXT } from "./util/Switch";

class Overlay {
    private previous: HTMLElement;
    private next: HTMLElement;

    constructor(slidesDirection : FilmstripDirection | DiapositiveDirection) {
        const overlayElement = document.createElement('div');
        overlayElement.classList.add("overlay", "overlay-" + slidesDirection);
        overlayElement.innerHTML = `<div class="previous-slide" name="previous">
                                        <div class="arrow" title="Previous slide"></div>
                                    </div>
                                    <div class="next-slide" name="next">
                                        <div class="arrow" title="Next slide"></div>
                                    </div>`;
        document.body.append(overlayElement);

        this.previous = overlayElement.children.namedItem(PREVIOUS)! as HTMLElement;
        this.next = overlayElement.children.namedItem(NEXT)! as HTMLElement;
    }

    addNextSlideClickListener(callback : Function) {
        (this.next.children[0] as HTMLElement).onclick = (e) => {
            callback();
        };
    }

    addPreviousSlideClickListener(callback : Function) {
        (this.previous.children[0] as HTMLElement).onclick = (e) => {
            callback();
        };
    }

    disablePreviousButton() {
        this.previous.classList.add('disabled');
    }

    enablePreviousButton() {
        this.previous.classList.remove('disabled');
    }

    disableNextButton() {
        this.next.classList.add('disabled');
    }

    enableNextButton() {
        this.next.classList.remove('disabled');
    }
}

export default Overlay;