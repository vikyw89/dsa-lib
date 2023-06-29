declare class LinkedListNode {
    data: unknown;
    next: any;
    constructor(data?: unknown);
}
/**
 * Represents a linked list.
 */
export declare class LinkedList {
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
     * TimeComplexity = O(1)
     * @returns The data of the first node.
     */
    first: () => unknown;
    /**
     * Returns the data of the last node in the linked list.
     * TimeComplexity = O(1)
     * @returns The data of the last node.
     */
    last: () => unknown;
    /**
     * Converts the linked list to an array.
     * TimeComplexity = O(n)
     * @returns An array containing the data of all the nodes.
     */
    toArray: () => unknown[];
    /**
     * Inserts a new node with the specified data at the end of the linked list.
     * TimeComplexity = O(1)
     * @param data - The data for the new node.
     */
    push: (data: unknown) => void;
    /**
     * Inserts a new node with the specified data at the beginning of the linked list.
     * TimeComplexity = O(1)
     * @param data - The data for the new node.
     */
    unshift: (data: unknown) => void;
    /**
     * Initializes the linked list with nodes created from the elements of the specified array.
     * TimeComplexity = O(n)
     * @param data - An array containing the data for the nodes.
     */
    fromArray: (data: Array<unknown>) => void;
    /**
     * Removes and returns the data of the last node in the linked list.
     * TimeComplexity = O(n)
     * @returns The data of the last node.
     */
    pop: () => unknown;
    /**
     * Removes and returns the data of the first node in the linked list.
     * TimeComplexity = O(1)
     * @returns The data of the first node.
     */
    shift: () => unknown;
    /**
     * Clears the linked list by setting the head node to undefined.
     * TimeComplexity = O(1)
     */
    clear: () => void;
    /**
     * Get size of the linkedList.
     * TimeComplexity = O(n)
     */
    size: () => number;
}
export {};
