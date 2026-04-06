// Função que calcula o quadrado de cada item do array com forEach e for

export function square_array_foreach(arr: number[]){
    arr.forEach((n, i, arr) => {arr[i] = n*n});
    return arr;
}

export function square_array_for(arr: number[]){
    for(let i=0; i < arr.length; i++)
        arr[i] = arr[i]*arr[i];
    return arr;
}
