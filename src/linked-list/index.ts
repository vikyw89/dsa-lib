class LinkedListNode {
    data: any
    next: any
    constructor(data?: any) {
        this.data = data ?? undefined
        this.next = undefined
    }
}

export class LinkedList {
    constructor() {
        this.head = new LinkedListNode()
    }
    head: any
    next: any

    // read methods
    first = () => {
        return this.head.data
    }

    last = () => {
        let pointer = this.head
        while (pointer?.next !== undefined) {
            pointer = pointer.next
        }
        return pointer.data
    }

    // insert methods
    push = (data: any) => {
        let pointer = this.head
        while (pointer.next !== undefined) {
            pointer = pointer.next
        }
        pointer.next = new LinkedListNode(data)
    }

    unshift = (data: any) => {
        let oldHead = this.head
        let newHead = new LinkedListNode(data)

        newHead.next = oldHead
        this.head = newHead.next
    }

    // delete methods
    pop = () => {
        let pointer = this.head
        while (pointer?.next?.next !== undefined) {
            pointer = pointer.next
        }
        let data = pointer.next.data
        pointer.next = undefined
        return data
    }

    shift = () => {
        let data = this.head.data
        this.head = this.head.next
        return data
    }

    clear = () => {
        
    }

}