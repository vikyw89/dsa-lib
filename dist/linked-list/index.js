"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = undefined;
    }
}
/**
 * Represents a linked list.
 */
class LinkedList {
    constructor() {
        /**
         * Returns the data of the first node in the linked list.
         * @returns The data of the first node.
         */
        this.first = () => {
            var _a;
            return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
        };
        /**
         * Returns the data of the last node in the linked list.
         * @returns The data of the last node.
         */
        this.last = () => {
            var _a;
            return (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
        };
        /**
         * Converts the linked list to an array.
         * @returns An array containing the data of all the nodes.
         */
        this.toArray = () => {
            let arr = [];
            let pointer = this.head;
            if (pointer === undefined)
                return arr;
            arr.push(pointer.data);
            while ((pointer === null || pointer === void 0 ? void 0 : pointer.next) !== undefined) {
                pointer = pointer.next;
                arr.push(pointer === null || pointer === void 0 ? void 0 : pointer.data);
            }
            return arr;
        };
        /**
         * Inserts a new node with the specified data at the end of the linked list.
         * @param data - The data for the new node.
         */
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
        /**
         * Inserts a new node with the specified data at the beginning of the linked list.
         * @param data - The data for the new node.
         */
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
        /**
         * Initializes the linked list with nodes created from the elements of the specified array.
         * @param data - An array containing the data for the nodes.
         */
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
        /**
         * Removes and returns the data of the last node in the linked list.
         * @returns The data of the last node.
         */
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
        /**
         * Removes and returns the data of the first node in the linked list.
         * @returns The data of the first node.
         */
        this.shift = () => {
            var _a, _b;
            let data = (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
            return data;
        };
        /**
         * Clears the linked list by setting the head node to undefined.
         */
        this.clear = () => {
            this.head = undefined;
        };
        this.size = () => {
            let counter = 0;
            let pointer = this.head;
            while (pointer !== undefined) {
                counter++;
                pointer = pointer.next;
            }
            return counter;
        };
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=index.js.map