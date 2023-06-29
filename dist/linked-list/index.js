"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = undefined;
    }
}
class LinkedList {
    constructor() {
        // read methods
        this.first = () => {
            var _a;
            return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
        };
        this.last = () => {
            var _a;
            return (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
        };
        this.toArray = () => {
            let arr = [];
            let pointer = this.head;
            if (pointer === undefined)
                return arr;
            arr.push(pointer.data);
            while ((pointer === null || pointer === void 0 ? void 0 : pointer.next) !== undefined) {
                pointer = pointer.next;
                arr.push(pointer.data);
            }
            return arr;
        };
        // insert methods
        this.push = (data) => {
            const newNode = new LinkedListNode(data);
            if (this.tail === undefined) {
                this.tail = newNode;
                this.head = newNode;
                return;
            }
            this.tail.next = newNode;
            this.tail = this.tail.next;
        };
        this.unshift = (data) => {
            const newNode = new LinkedListNode(data);
            if (this.head === undefined) {
                this.head = newNode;
                this.tail = newNode;
                return;
            }
            newNode.next = this.head;
            this.head = newNode;
        };
        this.fromArray = (data) => {
            this.head = undefined;
            this.tail = undefined;
            while (data.length !== 0) {
                const newNode = new LinkedListNode(data.pop());
                if (this.head === undefined) {
                    this.head = newNode;
                    this.tail = newNode;
                    continue;
                }
                newNode.next = this.head;
                this.head = newNode;
            }
        };
        // delete methods
        this.pop = () => {
            var _a;
            if (this.head === undefined) {
                return;
            }
            let data = (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
            let pointer = this.head;
            if (pointer.next === undefined) {
                this.head = undefined;
                this.tail = undefined;
                return data;
            }
            while (pointer.next.next !== undefined) {
                pointer = pointer.next;
            }
            pointer.next = undefined;
            return data;
        };
        this.shift = () => {
            var _a, _b;
            let data = (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
            return data;
        };
        this.clear = () => {
            this.head = undefined;
        };
        this.head = undefined;
        this.tail = undefined;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=index.js.map