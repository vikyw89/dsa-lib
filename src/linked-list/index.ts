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
        this.head = undefined
    }
    head: any

    // read methods
    first = () => {
        return this.head?.data
    }

    last = () => {
        let pointer = this.head
        if (pointer === undefined) {
            return undefined
        }
        while (pointer?.next !== undefined) {
            pointer = pointer.next
        }
        return pointer.data
    }

    toArray = () => {
        let arr: any = []
        let pointer = this.head
        if (pointer === undefined) return arr
        arr.push(pointer.data)
        while (pointer?.next !== undefined) {
            pointer = pointer.next
            arr.push(pointer.data)
        }
        return arr
    }

    // insert methods
    push = (data: any) => {
        let pointer = this.head
        if (pointer === undefined) {
            this.head = new LinkedListNode(data)
            return
        }
        while (pointer.next !== undefined) {
            pointer = pointer.next
        }
        pointer.next = new LinkedListNode(data)
    }

    unshift = (data: any) => {
        let oldHead = this.head
        let newHead = new LinkedListNode(data)
        this.head = newHead
        newHead.next = oldHead
    }

    // delete methods
    pop = () => {
        let pointer = this.head
        let data
        if (pointer === undefined) {
            return data
        }
        if (pointer.next === undefined) {
            data = pointer.data
            this.head = undefined
            return data
        }
        while (pointer.next !== undefined) {
            if (pointer.next.next === undefined) break
        }
        data = pointer.next.data
        pointer.next = undefined
        return data
    }

    shift = () => {
        let data = this.head?.data
        this.head = this.head?.next
        return data
    }

    clear = () => {

    }

}