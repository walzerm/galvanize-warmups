function charCounts(string) {
    var chars = {};

    for (var i = 0; i < string.length; i++) {
        if (!chars[string[i]]) {
            chars[string[i]] = 1;
        } else {
            chars[string[i]]++;
        }
    }
    console.log(chars);
}

function uniqueChars(string) {
    var unique = true;
    var charSet = new Set();
    for (var i = 0; i < string.length; i++) {
        if (charSet.has(string[i])) {
            unique = false;
        } else {
            charSet.add(string[i]);
        }
    }
    console.log(unique);
}

//charCounts("!Data!Is~The*Coolest");
uniqueChars('whfNn!dklsa');
