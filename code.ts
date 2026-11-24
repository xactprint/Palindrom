
function isPalindrome(word: string): boolean {

    // Condition d'arrêt
    if (word.length <= 1) {
        return true;
    }

    // Comparaison du premier et du dernier caractère
    if (word[0] !== word[word.length - 1]) {
        return false;
    }

    // Appel récursif : on retire les deux extrémités
    return isPalindrome(word.slice(1, -1));
}

// Tests
console.log(isPalindrome("kayak"));   // true
console.log(isPalindrome("radar"));   // true
console.log(isPalindrome("bonjour")); // false
console.log(isPalindrome("php"));     // true
