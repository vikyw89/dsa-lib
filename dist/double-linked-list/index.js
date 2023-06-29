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
/**
 * Represents a doubly linked list.
 */
class DoubleLinkedList {
    /**
     * Creates an instance of DoubleLinkedList.
     * @param data - Optional initial data for the doubly linked list.
     */
    constructor(data) {
        /**
         * Inserts a new node with the specified data at the end of the doubly linked list.
         * TimeComplexity = O(1)
         * @param data - The data for the new node.
         */
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
        /**
         * Returns the data of the first node in the doubly linked list.
         * TimeComplexity = O(1)
         * @returns The data of the first node.
         */
        this.first = () => {
            var _a;
            return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
        };
        /**
         * Converts the doubly linked list to an array.
         * TimeComplexity = O(n)
         * @returns An array containing the data of all the nodes.
         */
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
        /**
         * Returns the data of the last node in the doubly linked list.
         * TimeComplexity = O(1)
         * @returns The data of the last node.
         */
        this.last = () => {
            var _a;
            return (_a = this.tail) === null || _a === void 0 ? void 0 : _a.data;
        };
        /**
         * Inserts a new node with the specified data at the beginning of the doubly linked list.
         * TimeComplexity = O(1)
         * @param data - The data for the new node.
         */
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
        /**
         * Removes and returns the data of the last node in the doubly linked list.
         * TimeComplexity = O(1)
         * @returns The data of the last node.
         */
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
            let pointer = this.tail.prev;
            pointer.next = undefined;
            this.tail = pointer;
            return data;
        };
        /**
         * Removes and returns the data of the first node in the doubly linked list.
         * TimeComplexity = O(1)
         * @returns The data of the first node.
         */
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
            let pointer = this.head.next;
            pointer.prev = undefined;
            this.head = pointer;
            return data;
        };
        /**
         * Initializes the doubly linked list with nodes created from the elements of the specified array.
         * TimeComplexity = O(n)
         * @param data - An array containing the data for the nodes.
         */
        this.fromArray = (data) => {
            // reset
            this.head = undefined;
            this.tail = undefined;
            while (data.length !== 0) {
                const newNode = new DoubleLinkedListNode(data.pop());
                if (this.head === undefined) {
                    this.head = newNode;
                    this.tail = newNode;
                    continue;
                }
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
        };
        /**
         * Clears the doubly linked list by setting the head and tail nodes to undefined.
         * TimeComplexity = O(1)
         */
        this.clear = () => {
            this.head = undefined;
            this.tail = undefined;
        };
        /**
         * Get size of the linkedList.
         * TimeComplexity = O(n)
         */
        this.size = () => {
            let counter = 0;
            let pointer = this.head;
            while (pointer !== undefined) {
                counter++;
                pointer = pointer.next;
            }
            return counter;
        };
        this.head = undefined;
        this.tail = undefined;
    }
}
exports.DoubleLinkedList = DoubleLinkedList;
//# sourceMappingURL=index.js.map