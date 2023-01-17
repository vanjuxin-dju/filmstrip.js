import { Switch } from "./util/Switch";

type QueueNode = {
    action : Switch,
    callback : Function | null,
    next : QueueNode | null
}

class ActionQueue {
    private firstItem : QueueNode | null;
    private lastItem : QueueNode | null;
    private context : any;
    private func : Function;

    constructor(context : any, func : Function) {
        this.firstItem = null;
        this.lastItem = null;
        this.context = context;
        this.func = func;
    }

    public addAction(action : Switch, callback : Function | undefined) {
        let isNew = false;
        let obj : QueueNode = {
            action : action,
            callback : callback === undefined ? null : callback,
            next : null
        };
        if (this.firstItem === null) {
            this.firstItem = obj;
            isNew = true;
        }
        if (this.lastItem !== null) {
            this.lastItem.next = obj;
        }
        this.lastItem = obj;
    
        if (isNew) {
            this.goThrough();
        }
    }

    private goThrough() {
        if (this.firstItem === null) {
            this.lastItem = null;
            return;
        }

        this.func.call(this.context, this.firstItem.action, () => {
            if (this.firstItem === null) {
                return;
            }
            if (this.firstItem.callback !== null) {
                this.firstItem.callback();
            }

            this.firstItem = this.firstItem.next;
            this.goThrough();
        });
    }
}

export default ActionQueue;