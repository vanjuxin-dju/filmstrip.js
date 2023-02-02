import Oldifier from "./interfaces/Oldifier";

const OLD_FILM = "old-film";

export default class FilmOldificator implements Oldifier {
    public oldify(parent: HTMLElement): void {
        let slides = parent.children;
        for (let i = 0; i < slides.length; i++) {
            this.addOldFilmStyleToSlide(slides[i]);
        }
    }

    private addOldFilmStyleToSlide(slide: Element): void {
        let oldificatorWrapper = document.createElement("div");
        oldificatorWrapper.classList.add(OLD_FILM);
        slide.append(oldificatorWrapper);
    }
}