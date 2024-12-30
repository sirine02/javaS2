function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}


console.log(capitalizeWords("bonjour tout le monde"));