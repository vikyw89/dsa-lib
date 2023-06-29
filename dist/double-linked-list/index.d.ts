declare class DoubleLinkedListNode {
    data: unknown;
    next: any;
    prev: any;
    constructor(data?: unknown);
}
/**
 * Represents a doubly linked list.
 */
export declare class DoubleLinkedList {
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
    constructor(data?: unknown);
    /**
     * Inserts a new node with the specified data at the end of the doubly linked list.
     * @param data - The data for the new node.
     */
    push: (data: unknown) => void;
    /**
     * Returns the data of the first node in the doubly linked list.
     * @returns The data of the first node.
     */
    first: () => unknown;
    /**
     * Converts the doubly linked list to an array.
     * @returns An array containing the data of all the nodes.
     */
    toArray: () => unknown[];
    /**
     * Returns the data of the last node in the doubly linked list.
     * @returns The data of the last node.
     */
    last: () => unknown;
    /**
     * Inserts a new node with the specified data at the beginning of the doubly linked list.
     * @param data - The data for the new node.
     */
    unshift: (data: unknown) => void;
    /**
     * Removes and returns the data of the last node in the doubly linked list.
     * @returns The data of the last node.
     */
    pop: () => unknown;
    /**
     * Removes and returns the data of the first node in the doubly linked list.
     * @returns The data of the first node.
     */
    shift: () => any;
    /**
     * Initializes the doubly linked list with nodes created from the elements of the specified array.
     * @param data - An array containing the data for the nodes.
     */
    fromArray: (data: Array<unknown>) => void;
    /**
     * Clears the doubly linked list by setting the head and tail nodes to undefined.
     */
    clear: () => void;
    size: () => number;
}
export {};
