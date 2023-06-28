import { LinkedList } from "./index.js";

describe('testing LinkedList file', () => {
    const newList = new LinkedList()
    test('creation of a new LinkedList', () => {
        expect(JSON.stringify(newList)).toBe(JSON.stringify(new LinkedList()));
    });
    test('get linkedList data', () => {
        expect()
    })
});