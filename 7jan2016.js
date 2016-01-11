/*
* Write a function that takes two arrays and returns a new array with all items in alphabetical * order.
*/

function easySort(arr1, arr2) {
    var concatArr = arr1.concat(arr2);
    return concatArr.sort();
}

//Shit don't work
function hardSort(arr1, arr2) {
    var concatArr = arr1.concat(arr2);
    var sortedArr = [];

    sortedArr.push(concatArr[0]);
    for (var i = 1; i < concatArr.length; i++) {
        for (var j = 0; j < sortedArr.length; j++) {
            if (concatArr[i] < sortedArr[i]) {
                sortedArr.splice(i, 1, concatArr[i]);
                console.log(sortedArr);
            }
            console.log(concatArr);
        }

    }
    return sortedArr;
}

var array1 = [ "cat", "dog", "fish", "zebra" ],
    array2 = [ "lion", "aardvark", "gorilla" ]

//alphanimal(array1, array2)
console.log(hardSort(array1, array2));
//-> [ "aardvark", "cat", "dog", "fish", "gorilla", "lion", "zebra" ]
