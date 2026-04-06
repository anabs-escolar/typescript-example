import { array_to_string } from "../exercises/array_to_string";

test("test array to string", () => {
    expect(array_to_string(['Arrays', 'com', 'TypeScript'])).toBe('Arrays com TypeScript')
})