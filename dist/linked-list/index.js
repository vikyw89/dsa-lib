"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LinkedListNode {
    constructor(data) {
        this.data = data !== null && data !== void 0 ? data : undefined;
        this.next = undefined;
    }
}
class LinkedList {
    constructor() {
        // read methods
        this.first = () => {
            return this.head.data;
        };
        this.last = () => {
            let pointer = this.head;
            while ((pointer === null || pointer === void 0 ? void 0 : pointer.next) !== undefined) {
                pointer = pointer.next;
            }
            return pointer.data;
        };
        // insert methods
        this.push = (data) => {
            let pointer = this.head;
            while (pointer.next !== undefined) {
                pointer = pointer.next;
            }
            pointer.next = new LinkedListNode(data);
        };
        this.unshift = (data) => {
            let oldHead = this.head;
            let newHead = new LinkedListNode(data);
            newHead.next = oldHead;
            this.head = newHead.next;
        };
        // delete methods
        this.pop = () => {
            var _a;
            let pointer = this.head;
            while (((_a = pointer === null || pointer === void 0 ? void 0 : pointer.next) === null || _a === void 0 ? void 0 : _a.next) !== undefined) {
                pointer = pointer.next;
            }
            let data = pointer.next.data;
            pointer.next = undefined;
            return data;
        };
        this.shift = () => {
            let data = this.head.data;
            this.head = this.head.next;
            return data;
        };
        this.clear = () => {
        };
        this.head = new LinkedListNode();
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=index.js.map