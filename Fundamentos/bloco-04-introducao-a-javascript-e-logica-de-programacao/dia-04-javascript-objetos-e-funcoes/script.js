function verificaPalind (word) {
    for (let i = 0; i < word.length; i += 1) {
        if (word[i] == word[word.length -1 -i]) {
            return true
        } else {
            return false
        }
    }
}

console.log(verificaPalind('arara'));
