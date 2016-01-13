//Check is a number is a perfect sqaure

function isSquare(number) {

    var perfectSqaure = false;
    var squareRoot = Math.sqrt(number);
    if (squareRoot % 1 === 0) {
        perfectSqaure = true;
    }
    return perfectSqaure;
}


console.log(isSquare(99));
