export default class ActionQueue {
    #firstItem = null;
    #lastItem = null;

    constructor(context) {
        this._context = context;
    }

    addAction(func, action, callback) {
        let isNew = false;
        let obj = {
            func : func,
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

        this.#firstItem.func.call(this._context, this.#firstItem.action, () => {
            this.#firstItem.callback();

            this.#firstItem = this.#firstItem.next;
            this.#goThrough();
        });
    }
}