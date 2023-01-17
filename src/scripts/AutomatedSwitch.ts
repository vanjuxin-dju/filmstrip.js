export default class AutomatedSwitch {
    private timer : any;
    private isLoop : boolean;

    constructor(isLoop : boolean) {
        this.timer = null;
        this.isLoop = isLoop;
    }

    setAutomatedSwitch(isEnding : boolean, time : number, callback : Function) {
        clearTimeout(this.timer);
        if (!isEnding || (this.isLoop && isEnding)) {
            this.timer = setTimeout(() => {
                callback();
            }, time * 1000);
        }
    }

    clearAutomatedSwitch() {
        clearTimeout(this.timer);
    }
}