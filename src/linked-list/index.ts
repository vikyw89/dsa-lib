class LinkedListNode {
    data: unknown
    next: any
    constructor(data?: unknown) {
        this.data = data
        this.next = undefined
    }
}

/**
 * Represents a linked list.
 */
export class LinkedList {
    /**
     * The head node of the linked list.
     */
    head: LinkedListNode | undefined;

    /**
     * The tail node of the linked list.
     */
    tail: LinkedListNode | undefined;

    /**
     * Returns the data of the first node in the linked list.
     * @returns The data of the first node.
     */
    first = () => {
        return this.head?.data;
    };

    /**
     * Returns the data of the last node in the linked list.
     * @returns The data of the last node.
     */
    last = () => {
        return this.tail?.data;
    };

    /**
     * Converts the linked list to an array.
     * @returns An array containing the data of all the nodes.
     */
    toArray = () => {
        let arr: Array<unknown> = [];
        let pointer = this.head;
        if (pointer === undefined) return arr;
        arr.push(pointer.data);
        while (pointer?.next !== undefined) {
            pointer = pointer.next;
            arr.push(pointer?.data);
        }
        return arr;
    };

    /**
     * Inserts a new node with the specified data at the end of the linked list.
     * @param data - The data for the new node.
     */
    push = (data: unknown) => {
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
    unshift = (data: unknown) => {
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
    fromArray = (data: Array<unknown>) => {
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
    pop = () => {
        if (this.head === undefined) {
            return;
        }
        let data = this.tail?.data;
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
    shift = () => {
        let data = this.head?.data;
        this.head = this.head?.next;
        return data;
    };

    /**
     * Clears the linked list by setting the head node to undefined.
     */
    clear = () => {
        this.head = undefined;
    };

    size = () => {
        let counter = 0
        let pointer = this.head
        while (pointer !== undefined) {
            counter++
            pointer = pointer.next
        }
        return counter
    }
}
