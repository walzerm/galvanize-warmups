/*
You are given an array of grades. You need to process this array, and return an array that describes whether each grade was higher, lower or even to the previous grade.

So given the following array:

[6,3,5,4,3,4,4,5]
Your code would produce:

["down","up","down","down","up","even","up"]
When given an empty array, it returns an empty array.

Note: your array tracks the differences between grades, so it will be one item shorter than the given array.
*/

function gradeComparing(arr) {
    var gradeCompareArr = [];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            gradeCompareArr.push("even");
        } else if (arr[i] > arr[i - 1]) {
            gradeCompareArr.push("up");
        } else {
            gradeCompareArr.push("down");
        }
    }
    return gradeCompareArr;
}

console.log(gradeComparing([6,3,5,4,3,4,4,5]));
