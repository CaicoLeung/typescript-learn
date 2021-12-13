function unique_set(array: number[]) {
    const set = new Set(array);
    return Array.from(set);
}

// test
const arr2 = [1, 4, 1, 5, 4, 6, 6, 7, 5];
console.log(unique_set(arr2));
