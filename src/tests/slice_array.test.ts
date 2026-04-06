import { slice_array } from "../exercises/slice_array";

test('test sort method', () => {
    expect(slice_array([2,4,6,2,8,9,5])).toEqual([2,4])
})