export default class Overlay {
    constructor(slidesDirection) {
        this.overlayElement = document.createElement('div');
        this.overlayElement.classList.add("overlay", "overlay-" + slidesDirection);
        this.overlayElement.innerHTML = `<div class="previous-slide" name="previous">
                                            <div class="arrow" title="Previous slide"></div>
                                        </div>
                                        <div class="next-slide" name="next">
                                            <div class="arrow" title="Next slide"></div>
                                        </div>`;
        document.body.append(this.overlayElement);
    }

    addNextSlideClickListener(callback) {
        this.overlayElement.children.next.children[0].onclick = callback;
    }

    addPreviousSlideClickListener(callback) {
        this.overlayElement.children.previous.children[0].onclick = callback;
    }

    disablePreviousButton() {
        this.overlayElement.children.previous.classList.add('disabled');
    }

    isDisabledPreviousButton() {
        return this.overlayElement.children.previous.classList.contains('disabled');
    }

    enablePreviousButton() {
        this.overlayElement.children.previous.classList.remove('disabled');
    }

    disableNextButton() {
        this.overlayElement.children.next.classList.add('disabled');
    }

    isDisabledNextButton() {
        return this.overlayElement.children.next.classList.contains('disabled');
    }

    enableNextButton() {
        this.overlayElement.children.next.classList.remove('disabled');
    }
}