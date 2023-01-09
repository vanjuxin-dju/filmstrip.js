export default class AutomatedSwitch {
    #timer = null;
    #isLoop = false;

    constructor(isLoop) {
        this.#isLoop = isLoop;
    }

    setAutomatedSwitch(isEnding, time, callback) {
        clearTimeout(this.#timer);
        if (!isEnding || (this.#isLoop && isEnding)) {
            this.#timer = setTimeout(() => {
                callback();
            }, time * 1000);
        }
    }

    clearAutomatedSwitch() {
        clearTimeout(this.#timer);
    }
}