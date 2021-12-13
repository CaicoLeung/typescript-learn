function unique_map(array: number[]): number[] {
    let _map = new Map();
    let uniqueArr: number[] = [];
    for (let i = 0; i < array.length; i ++) {
        if (_map.has(array[i])) {
            _map.set(array[i], true);
        } else {
            _map.set(array[i], false);
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
}

// test
const arr = [1, 4, 1, 5, 4, 6, 6, 7, 5];
console.log(unique_map(arr));
