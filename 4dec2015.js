/*
	Write a function parensChecker which takes a single string arguement consisting of a bunch of parentheses. The function should return true if the string is a valid parentheses expression. For example:
​
	parensChecker("()(((())))") //=> true
​
	parensChecker("())))(") //=> false
​
	parensChecker(")(") //=> false
​
*/

function parensChecker(input){
	var valid;
	for (var i = 0; i < input.length; i++) {
		if (input[i] === "(") {
			valid++;
		} else if (input[i] === ")") {
			valid--;
		}
		if (valid < 0) {
			return false;
		}
	}
	if (valid === 0) {
		return true;
	} else {
		return false;
	}
}


function test(parensCheckFunction) {
	var testCases = {
        "()(((())))": true,
        "())))(": false,
        ")(": false,
        "())": false,
		"))": false,
        "([{}])": true,
        "([([[{(){}[()]}]])])": true,
        "}{": false,
        "[][][]{}(){[]}({})": true
    };
	var allTestsPass = true;
	for(parenString in testCases) {
		var expected = testCases[parenString];
		var actual = parensChecker(parenString);

		if(expected !== actual) {
			console.log("Failure for " + parenString);
			console.log("  expected: " + expected);
			console.log("  actual:   " + actual);
			allTestsPass = false;
		}
	}

	if(allTestsPass) {
		console.log("all tests pass");
	}
}

test(parensChecker);