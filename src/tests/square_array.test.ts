import { square_array_for, square_array_foreach } from "../exercises/square_array";

test('test square array simple for', () => {
    expect(square_array_for([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1])
})

test('test square array foreach', () => {
    expect(square_array_for([3,5,7,3,8,9,1])).toEqual([9,25,49,9,64,81,1])
})
