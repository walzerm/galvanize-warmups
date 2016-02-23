// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
//
// So as you can see sum of consecutives 1 is 1
// sum of 3 consecutives 4 is 12
// sum of 0... and sum of 2
// consecutives 3 is 6 ...
//
// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

function sumConsecutives(arr) {
    var sum  = [];
    var sums = 0;
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr[i] === arr[i - 1]) {
            if (sums === 0) {
                sums = arr[i] + arr[i - 1];
            } else {
                sums += arr[i];
            }
        } if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
            sum.push(arr[i]);
            sums = 0;
        } else {
            sum.push(sums);
            sums = 0;
        }
    }
    if (arr[arr.length - 1] !== arr[arr.length - 2]) {
        sum.push(arr[arr.length - 1]);
    }
    console.log(sum);
}

sumConsecutives([-5,-5,7,7,12,0]);
