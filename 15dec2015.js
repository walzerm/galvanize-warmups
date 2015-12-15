'use strict';
// This should return an array with one copy of each character
// in str, it must however, use a Set to do so.
function unique(str) {
	var mySet = new Set(str);
	console.log(mySet);
	//return uneval([...mySet]);
}
//unique("fhjrwkgfueiwjbdd");
// This should return a Set with one letter each character that
// appears in BOTH str1 and str2 (set intersection)
// (hint, use a loop and the .has property of sets
// for (let item of mySet) {//Do stuff}
function intersection(str1, str2) {
    var set1 = new Set(str1);
    var mySet = new Set();
    for (var i = 0; i < str2.length; i++) {
        if (set1.has(str2[i])) {
            mySet.add(str2[i]);
        }
    }
    //return Array.from(mySet);
    return mySet;
}
//console.log(intersection('abcdr', 'nghdaja'));
// This function should return a Set which has all the characters
// that appear in str1 or str2 (set union)
function allLetters(str1, str2) {
    var mySet = new Set(str1);
    for (var i = 0; i < str2.length; i++) {
        mySet.add(str2[i]);
    }
    //return Array.from(mySet);
    return mySet;
}
//allLetters('abcdr', 'nghdja');
// This function should return a Set which has 1 copy of each character
// that appears in str1 or in str2 but not in both.
// hint: (set union - set intersection)
function uniqueLetters(str1, str2) {
    var allLettersSet = allLetters(str1, str2);
    var bothLettersSet = intersection(str1, str2);
    bothLettersSet.forEach(function(value) {
        if (allLettersSet.has(value)) {
            allLettersSet.delete(value);
        }
    })
    console.log(Array.from(allLettersSet));
}
uniqueLetters('abcdr', 'nghdja');
// Don't forget to test your results!
