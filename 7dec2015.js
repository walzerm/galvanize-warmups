function removeDupes(string) {
    var stringSet = new Set()
    for (var i = 0; i < string.length; i++) {
        stringSet.add(string[i]);
    }
    console.log(Array.from(stringSet).join(''));
}

//removeDupes('AABB'); // 'AB'
//removeDupes('AaAaBbBb'); // 'AaBb'
//removeDupes('cAtCaT'); // 'cAtCaT'

function insensitiveRemoveDupes(string) {
    var stringSet = new Set()
    var testSet = new 
    var testString = string.toLowerCase();
    for (var i = 0; i < testString.length; i++) {
        if (!)
        stringSet.add(string[i]);
    }
    console.log(Array.from(stringSet).join(''));
}

insensitiveRemoveDupes('AABB'); // 'AB'
insensitiveRemoveDupes('AaAaBbBb'); // 'AB'
insensitiveRemoveDupes('cAtCaT'); // 'cAt'
