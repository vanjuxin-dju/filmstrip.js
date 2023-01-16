import "./styles/index.less";


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

