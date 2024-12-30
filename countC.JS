function countCharacters(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}

console.log(countCharacters("bonjour")); 
console.log(countCharacters("bonjour tout le monde")); 
console.log(countCharacters(""));