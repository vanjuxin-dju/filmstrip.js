import FilmstripDirection from "scripts/util/FilmstripDirection";
import SlideFormat from "scripts/util/SlideFormat";

export default interface Perforator {
    perforate(parent: HTMLElement, slidesMainFormat : SlideFormat, slidesDirection: FilmstripDirection) : void;
}