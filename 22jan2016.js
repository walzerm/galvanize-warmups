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

console.log(mostLikely('1:2','1:3'));
