import { array_filter } from "../exercises/array_filter";

test('test array filter return even numbers', () => {
    expect(array_filter([8, 3, 9, 5, 6, 12])).toEqual([8,6,12])
})