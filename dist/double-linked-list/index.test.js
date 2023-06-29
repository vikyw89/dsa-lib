"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
describe('testing DoubleLinkedList file', () => {
    let newList;
    beforeEach(() => {
        newList = new index_js_1.DoubleLinkedList();
    });
    test('new DoubleLinkedList()', () => {
        expect(JSON.stringify(newList)).toBe(JSON.stringify(new index_js_1.DoubleLinkedList()));
    });
    test('DoubleLinkedList.push()', () => {
        newList.push(1);
        expect(newList.head.data).toBe(1);
        newList.push(2);
        expect(newList.tail.data).toBe(2);
        expect(newList.head.data).toBe(1);
    });
    test('DoubleLinkedList.first()', () => {
        expect(newList.first()).toBe(undefined);
        newList.push(1);
        expect(newList.first()).toBe(1);
        newList.push(undefined);
        expect(newList.head.next.data).toBe(undefined);
    });
    test('DoubleLinkedList.toArray()', () => {
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([]));
        newList.push(null);
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([null]));
        newList.push(1);
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([null, 1]));
    });
    test('DoubleLinkedList.last()', () => {
        expect(newList.last()).toBe(undefined);
        newList.push(3);
        expect(newList.last()).toBe(3);
        newList.push(4);
        expect(newList.last()).toBe(4);
        newList.push(undefined);
        expect(newList.last()).toBe(undefined);
    });
    test('DoubleLinkedList.unshift()', () => {
        newList.unshift(0);
        expect(JSON.stringify(newList.first())).toBe(JSON.stringify(0));
        newList.unshift(1);
        expect(JSON.stringify(newList.first())).toBe(JSON.stringify(1));
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([1, 0]));
        newList.unshift(undefined);
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([undefined, 1, 0]));
    });
    test('DoubleLinkedList.pop()', () => {
        expect(newList.pop()).toBe(undefined);
        newList.push(0);
        expect(newList.pop()).toBe(0);
        newList.push(1);
        for (let i = 0; i < 10000000; i++) {
            newList.push(2);
        }
        expect(newList.pop()).toBe(2);
    });
    test('DoubleLinkedList.shift()', () => {
        expect(newList.shift()).toBe(undefined);
        newList.push(1);
        newList.push(2);
        expect(newList.shift()).toBe(1);
    });
    test('DoubleLinkedList.fromArray()', () => {
        newList.fromArray([]);
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([]));
        newList.fromArray([1, 2, 3, 4]);
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([1, 2, 3, 4]));
        newList.fromArray([undefined, undefined]);
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([undefined, undefined]));
    });
    test('DoubleLinkedList.clear()', () => {
        newList.fromArray([1, 2, 3, 4, 3, 1, 1, 1, 4]);
        newList.clear();
        expect(JSON.stringify(newList.toArray())).toBe(JSON.stringify([]));
    });
    test('LinkedList.length()', () => {
        expect(newList.size()).toBe(0);
        newList.fromArray([1, 2, 3, 4, 3, 1, 1, 1, 4]);
        expect(newList.size()).toBe(9);
    });
});
//# sourceMappingURL=index.test.js.map