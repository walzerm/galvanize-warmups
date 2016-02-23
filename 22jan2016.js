/*
Create a function mostLikely which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

mostLikely('1:3','1:2') will return false as 1 in 3 is less likely than 1 in 2.
*/

function mostLikely(strProb1, strProb2) {
     var arrProb1 = strProb1.split(':');
     var arrProb2 = strProb2.split(':');
     if (arrProb1[0] / arrProb1[1] < arrProb2[0] / arrProb2[1]) {
         return false;
     }
     return true;
}

//console.log(mostLikely('1:2','1:3'));


/*
A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we need to generate random binary strings with a specified length.

In this kata you have to implement a function generate that receives a length and has to return a random binary strigh with length characters.

Example:

Generate a chromosome with length of 4 generate(4) could return the chromosome 0010, 1110, 1111... or any of 2^4 possibilities.

Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.
*/

function generate(length) {
    var chromosome = "";
    for (var i = 0; i < length; i++) {
        chromosome += Math.round(Math.random());
    }
    return chromosome;
}

console.log(generate(4));
