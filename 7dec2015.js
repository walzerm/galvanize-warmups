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
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        var letter = string[i].toLowerCase();
        if (newString.indexOf(letter) < 0) {
            newString += string[i];
        }
    }
    console.log(newString);
}

insensitiveRemoveDupes('AABB'); // 'AB'
insensitiveRemoveDupes('AaAaBbBb'); // 'AB'
insensitiveRemoveDupes('cAtCaT'); // 'cAt'
