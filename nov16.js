function findPalindrome(string) {
	return string.split("").reverse().join("");
}

console.log(findPalindrome("hello"));