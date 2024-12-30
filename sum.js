
function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum; 
}


let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log("Sum of array:", sumArray(numbers));