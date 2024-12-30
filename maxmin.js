function findMax(arr) {
    return Math.max(...arr); 
}


function findMin(arr) {
    return Math.min(...arr);
}

let numbers = [2, 1, 4, 3, 5, 1, 9, 6, 7, 3];
console.log("Maximum:", findMax(numbers)); 
console.log("Minimum:", findMin(numbers));