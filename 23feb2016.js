/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The integers in the array are either entirely odd or entirely even except for a single integer N. Write a method that takes the array as an argument and returns N.

For example:

[2, 4, 0, 100, 4, 11, 2602, 36]

Should return: 11

[160, 3, 1719, 19, 11, 13, -21]

Should return: 160
*/

function findOutlier(integers){

    var even = [];
    var odd = [];
    var count = 0;

    while (true) {
        if (integers[count] % 2 === 0 || integers[count] === 0) {
            even.push(integers[count]);
        } else {
            odd.push(integers[count]);
        }
        if ((even.length === 1 && odd.length > 1) || (odd.length === 1 && even.length > 1)) break;
        count++;
    }

    if (even.length > 1) return odd[0];

    return even[0];
}

console.log(findOutlier([2,6,8,10,3]));
