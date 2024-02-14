function findVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelPositions = {};
    
    for (let i = 0; i < word.length; i++) {
        const char = word[i].toLowerCase();
        if (vowels.includes(char)) {
            if (vowelPositions[char]) {
                vowelPositions[char].push(i.toString());
            } else {
                vowelPositions[char] = [i.toString()];
            }
        }
    }
    
    return vowelPositions;
}

console.log(findVowels("Heleelaeiouo"));
