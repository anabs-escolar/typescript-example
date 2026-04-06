import { sort_array } from "../exercises/sort_array";

test('test sort method', () => {
    expect(sort_array(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['ave', 'boneco', 'carro', 'lapis'])
})