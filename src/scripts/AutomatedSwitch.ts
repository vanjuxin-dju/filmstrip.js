export default class AutomatedSwitch {
    private timer : ReturnType<typeof setTimeout> | null;
    private isLoop : boolean;

    constructor(isLoop : boolean) {
        this.timer = null;
        this.isLoop = isLoop;
    }

    setAutomatedSwitch(isEnding : boolean, time : number, callback : Function) {
        this.clearAutomatedSwitch();
        if (!isEnding || (this.isLoop && isEnding)) {
            this.timer = setTimeout(() => {
                callback();
            }, time * 1000);
        }
    }

    clearAutomatedSwitch() {
        if (this.timer !== null) {
            clearTimeout(this.timer);
        }
    }
}