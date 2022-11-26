export default class Overlay {
    constructor(slidesDirection) {
        this.overlayElement = document.createElement('div');
        this.overlayElement.classList.add("overlay", "overlay-" + slidesDirection);
        this.overlayElement.innerHTML = '<div class="previous-slide" name="previous" title="Previous slide"></div><div class="next-slide" name="next" title="Next slide"></div>';
        document.body.append(this.overlayElement);
    }

    addNextSlideClickListener(callback) {
        this.overlayElement.children.next.onclick = callback;
    }

    addPreviousSlideClickListener(callback) {
        this.overlayElement.children.previous.onclick = callback;
    }
}