export declare class DoubleLinkedList {
    head: any;
    tail: any;
    constructor(data?: any);
    push: (data: any) => void;
    first: () => any;
    toArray: () => any[];
    last: () => any;
    unshift: (data: any) => void;
    pop: () => any;
    shift: () => any;
    fromArray: (data: Array<any>) => void;
    clear: () => void;
}
