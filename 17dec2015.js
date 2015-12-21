function sumOfKeys(obj) {
    //A loop solution for summing the keys
    var keySum = 0;
    for (var key in obj) {
        if (parseFloat(key)) {
            keySum+= parseFloat(key);
        }

    }
    //A non loop solution for achieving the same task
    var arr = Object.keys(obj);

    function isNumber(value) {
        return !isNaN(value);
    }
    var filtered = arr.filter(isNumber).reduce(function(a, b) {
        return parseFloat(a) + parseFloat(b);
    });
    console.log(filtered);
}

var obj = {
    2: 'hello',
    'NaN': 'bye',
    3.4: 'boo',
    '6': 'why'
};
sumOfKeys(obj);
