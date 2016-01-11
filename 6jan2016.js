/**
 * This function will convert a string to it's roman numeral value.
 * If the string is not a valid roman numeral string, this function
 * will return NaN.
 */
function convertRomanNumeral(input) {
	// This constant could be globalized.
	var ROMAN_LOOKUP = {
		i: 1,
		v: 5,
		x: 10,
		l: 50,
		c: 100,
	};

	var sum = 0;
	var lowerCaseInput = input.toLowerCase();

	for(var i = 0; i < lowerCaseInput.length; i++) {
		var currentChar = lowerCaseInput[i],
		    nextChar    = lowerCaseInput[i+1];

		var currentRomanValue = ROMAN_LOOKUP[currentChar],
		    nextRomanValue    = ROMAN_LOOKUP[nextChar]

		if(currentRomanValue < nextRomanValue) {
			sum -= currentRomanValue;
		}
		else {
			sum += currentRomanValue;
		}
	}

	return sum;
};

/* Write some tests that verify the behavior described in the comment.
 * You should write several functions, then call each of those functions
 * from this function, which should return true if convertRomanNumerals
 * is correct, and false otherwise.


 ***This is the example provided by the instructor***
 */


 function testConvertRomanNumerals(){
     var testCases = {
         'VII': 7,
         'vii': 7,
         'I': 1,
         'i': 1,
         'IV': 4,
         'Iv': 4,
         'iV': 4,
         'IX': 9,
         'XCIV': 94,
         'xciv': 94
     }

     var NanCases = {
         'ggg': true
     }

     for(numeral in testCases) {
         var actual = convertRomanNumeral(numeral);
         if(actual !== testCases[numeral]) {
             console.log(`Failed on ${numeral}, expected ${testCases[numeral]} but got ${actual}`);
             return false;
         }
     }

     for(numeral in NanCases) {
         var actual = convertRomanNumeral(numeral);
         if (!isNaN(actual)) return false;
     }

     console.log("all tests pass");
     return true;
 }

 testConvertRomanNumerals();


 //For testing using mocha and chai, install mocha and chai
 //Save this into a folder called Test
var mocha = require('mocha');
var expect = require('chai').expect;

var rn = require('../romanNumerals');

describe("convertRomanNumeral", function() {

    it("should correctly convert roman numeral strings to integers", function() {
        expect(rn.convertRomanNumeral("x")).to.equal(10);
        expect(rn.convertRomanNumeral("ii")).to.equal(2);
    });

    it("should return NaN if the input was not a valid roman numeral string.", function(){
        var output = rn.convertRomanNumeral('g');
        expect(isNaN(output)).to.equal(true);
    });
});
