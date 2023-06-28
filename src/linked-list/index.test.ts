import { LinkedList } from "./index.js";

describe('testing LinkedList file', () => {
    const newList = new LinkedList()
    test('creation of a new LinkedList', () => {
        expect(JSON.stringify(newList)).toBe(JSON.stringify(new LinkedList()));
    });
    
    
    test('LinkedList.first()',()=>{
        expect(newList.first()).toBe(undefined)
        expect(newList?.head?.next).toBe(undefined)
    })

    test('LinkedList.toArray()', () => {
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([]))

    })

    test('LinkedList.push()', ()=>{
        newList.push(1)
        newList.push(2)
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([1,2]))
    })

    test('LinkedList.last()',()=>{
        newList.push(3)
        expect(newList.last()).toBe(3)
    })

    test('LinkedList.unshift()',()=>{
        newList.unshift(0)
        
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([0,1,2,3]))
    })
});