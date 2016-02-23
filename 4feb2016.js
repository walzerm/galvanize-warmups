function match(string) {
    var re = /([a-z].*\1/i;

    // console.log(re.exec(string));
    console.log(string.search(re));
}

match("a1bcdec1");
