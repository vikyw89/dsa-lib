class DoubleLinkedListNode {
    data: any
    next: any
    prev: any
    constructor(data?: any) {
        this.data = data
        this.next = undefined
        this.prev = undefined
    }
}

export class DoubleLinkedList {
    head: any
    tail: any
    constructor(data?: any) {
        this.head = undefined
        this.tail = undefined
    }

    push = (data: any) => {
        if (this.tail === undefined) {
            this.head = new DoubleLinkedListNode(data)
            this.tail = this.head
            return
        }
        let newNode = new DoubleLinkedListNode(data)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = this.tail.next
    }

    first = () => {
        return this.head?.data
    }

    toArray = () => {
        if (this.head === undefined) {
            return []
        }
        let data = []
        let pointer = this.head
        while (pointer !== undefined) {
            data.push(pointer.data)
            pointer = pointer.next
        }
        return data
    }

    last = () => {
        return this.tail?.data
    }

    unshift = (data: any) => {
        if (this.head === undefined) {
            this.head = new DoubleLinkedListNode(data)
            this.tail = this.head
            return
        }
        let newNode = new DoubleLinkedListNode(data)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }

    pop = () => {
        if (this.tail === undefined) {
            return
        }
        let data = this.tail.data
        if (this.tail.prev === undefined) {
            this.head = undefined
            this.tail = undefined
            return data
        }
        this.tail = this.tail.prev
        this.tail.next = undefined
        return data
    }

    shift = () => {
        if (this.head === undefined) {
            return
        }
        let data = this.head.data
        if (this.head.next === undefined) {
            this.tail = undefined
            this.head = undefined
            return data
        }
        this.head = this.head.next
        this.head.prev = undefined
        return data
    }

    fromArray = (data: Array<any>) => {
        // reset 
        this.head = undefined
        this.tail = undefined
        while (data.length !== 0) {
            const newNode = new DoubleLinkedListNode(data.pop())
            if (this.head === undefined && this.tail === undefined) {
                this.head = newNode
                this.tail = newNode
                continue
            }

            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
    }

    clear = () => {
        this.head = undefined
        this.tail = undefined
    }
}