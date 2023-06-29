"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleLinkedList = void 0;
class DoubleLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = undefined;
        this.prev = undefined;
    }
}
class DoubleLinkedList {
    constructor(data) {
        this.push = (data) => {
            if (this.tail === undefined) {
                this.head = new DoubleLinkedListNode(data);
                this.tail = this.head;
                return;
            }
            let newNode = new DoubleLinkedListNode(data);
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = this.tail.next;
        };
        this.first = () => {
            var _a;
            return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
        };
        this.toArray = () => {
            if (this.head === undefined) {
                return [];
            }
            let data = [];
            let pointer = this.head;
            while (pointer !== undefined) {
                data.push(pointer.data);
                pointer = pointer.next;
            }
            return data;
        };
        this.last = () => {
            var _a;
            return (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
        };
        this.unshift = (data) => {
            if (this.head === undefined) {
                this.head = new DoubleLinkedListNode(data);
                this.tail = this.head;
                return;
            }
            let newNode = new DoubleLinkedListNode(data);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        };
        this.pop = () => {
            if (this.tail === undefined) {
                return;
            }
            let data = this.tail.data;
            if (this.tail.prev === undefined) {
                this.head = undefined;
                this.tail = undefined;
                return data;
            }
            this.tail = this.tail.prev;
            this.tail.next = undefined;
            return data;
        };
        this.shift = () => {
            if (this.head === undefined) {
                return;
            }
            let data = this.head.data;
            if (this.head.next === undefined) {
                this.tail = undefined;
                this.head = undefined;
                return data;
            }
            this.head = this.head.next;
            this.head.prev = undefined;
            return data;
        };
        this.fromArray = (data) => {
            // reset 
            this.head = undefined;
            this.tail = undefined;
            while (data.length !== 0) {
                const newNode = new DoubleLinkedListNode(data.pop());
                if (this.head === undefined && this.tail === undefined) {
                    this.head = newNode;
                    this.tail = newNode;
                    continue;
                }
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
        };
        this.clear = () => {
            this.head = undefined;
            this.tail = undefined;
        };
        this.head = undefined;
        this.tail = undefined;
    }
}
exports.DoubleLinkedList = DoubleLinkedList;
//# sourceMappingURL=index.js.map