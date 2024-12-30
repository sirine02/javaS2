function factorial(n) {
    if (n < 0) {
        return "Le facteur doit être un nombre positif ou zéro.";
    }
    if (n === 0) {
        return 1; 
    }
    return n * factorial(n - 1);
}


console.log(factorial(5)); 
console.log(factorial(0));