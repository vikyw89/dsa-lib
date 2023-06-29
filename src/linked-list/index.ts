class LinkedListNode {
    data: any
    next: any
    constructor(data?: any) {
        this.data = data
        this.next = undefined
    }
}

export class LinkedList {

    constructor() {
        this.head = undefined
        this.tail = undefined
    }
    head: any
    tail: any

    // read methods
    first = () => {
        return this.head?.data
    }

    last = () => {
        return this.tail?.data
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
        const newNode = new LinkedListNode(data)
        if (this.tail === undefined) {
            this.tail = newNode
            this.head = newNode
            return
        }

        this.tail.next = newNode
        this.tail = this.tail.next
    }

    unshift = (data: any) => {
        const newNode = new LinkedListNode(data)
        if (this.head === undefined) {
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    fromArray = (data: any) => {
        this.head = undefined
        this.tail = undefined
        while (data.length !== 0) {
            const newNode = new LinkedListNode(data.pop())
            if (this.head === undefined) {
                this.head = newNode
                this.tail = newNode
                continue
            }

            newNode.next = this.head
            this.head = newNode
        }
    }

    // delete methods
    pop = () => {
        if (this.head === undefined) {
            return
        }

        let data = this.tail?.data
        let pointer = this.head
        if (pointer.next === undefined) {
            this.head = undefined
            this.tail = undefined
            return data
        }

        while (pointer.next.next !== undefined) {
            pointer = pointer.next
        }
        pointer.next = undefined
        return data
    }

    shift = () => {
        let data = this.head?.data
        this.head = this.head?.next
        return data
    }

    clear = () => {
        this.head = undefined
    }

}