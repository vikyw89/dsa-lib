class DoubleLinkedListNode {
    data: unknown
    next: any
    prev: any
    constructor(data?: unknown) {
        this.data = data
        this.next = undefined
        this.prev = undefined
    }
}

/**
 * Represents a doubly linked list.
 */
export class DoubleLinkedList {
    /**
     * The head node of the doubly linked list.
     */
    head: undefined | DoubleLinkedListNode;

    /**
     * The tail node of the doubly linked list.
     */
    tail: undefined | DoubleLinkedListNode;

    /**
     * Creates an instance of DoubleLinkedList.
     * @param data - Optional initial data for the doubly linked list.
     */
    constructor(data?: unknown) {
        this.head = undefined;
        this.tail = undefined;
    }

    /**
     * Inserts a new node with the specified data at the end of the doubly linked list.
     * @param data - The data for the new node.
     */
    push = (data: unknown) => {
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
     * @returns The data of the first node.
     */
    first = () => {
        return this.head?.data;
    };

    /**
     * Converts the doubly linked list to an array.
     * @returns An array containing the data of all the nodes.
     */
    toArray = () => {
        if (this.head === undefined) {
            return [];
        }
        let data: Array<unknown> = [];
        let pointer = this.head;
        while (pointer !== undefined) {
            data.push(pointer.data);
            pointer = pointer.next;
        }
        return data;
    };

    /**
     * Returns the data of the last node in the doubly linked list.
     * @returns The data of the last node.
     */
    last = () => {
        return this.tail?.data;
    };

    /**
     * Inserts a new node with the specified data at the beginning of the doubly linked list.
     * @param data - The data for the new node.
     */
    unshift = (data: unknown) => {
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
     * @returns The data of the last node.
     */
    pop = () => {
        if (this.tail === undefined) {
            return;
        }
        let data = this.tail.data;
        if (this.tail.prev === undefined) {
            this.head = undefined;
            this.tail = undefined;
            return data;
        }
        let pointer = this.tail.prev
        pointer.next = undefined
        this.tail = pointer
        return data;
    };

    /**
     * Removes and returns the data of the first node in the doubly linked list.
     * @returns The data of the first node.
     */
    shift = (): any => {
        if (this.head === undefined) {
            return;
        }
        let data = this.head.data;
        if (this.head.next === undefined) {
            this.tail = undefined;
            this.head = undefined;
            return data;
        }

        let pointer = this.head.next
        pointer.prev = undefined
        this.head = pointer
        return data;
    };

    /**
     * Initializes the doubly linked list with nodes created from the elements of the specified array.
     * @param data - An array containing the data for the nodes.
     */
    fromArray = (data: Array<unknown>) => {
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
     */
    clear = () => {
        this.head = undefined;
        this.tail = undefined;
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
