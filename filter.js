function filterArray(arr, condition) {
    return arr.filter(condition); 
}

let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let filteredNumbers = filterArray(numbers, num => num > 5);
console.log(filteredNumbers);