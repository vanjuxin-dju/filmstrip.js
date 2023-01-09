export default class ActionQueue {
    #firstItem = null;
    #lastItem = null;

    constructor(context, func) {
        this._context = context;
        this._func = func;
    }

    addAction(action, callback) {
        let isNew = false;
        let obj = {
            action : action,
            callback : callback,
            next : null
        };
        if (this.#firstItem === null) {
            this.#firstItem = obj;
            isNew = true;
        }
        if (this.#lastItem !== null) {
            this.#lastItem.next = obj;
        }
        this.#lastItem = obj;
    
        if (isNew) {
            this.#goThrough();
        }
    }

    #goThrough() {
        if (this.#firstItem === null) {
            this.#lastItem = null;
            return;
        }

        this._func.call(this._context, this.#firstItem.action, () => {
            if (this.#firstItem.callback) {
                this.#firstItem.callback();
            }

            this.#firstItem = this.#firstItem.next;
            this.#goThrough();
        });
    }
}