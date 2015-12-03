//returns the finnanocci sequence up to a given position

function fibbonacci(n) {
    var seq = [1, 1];
	while (seq.length <= n) {
	    seq.push(seq[seq.length - 2] + seq[seq.length - 1]);
	}
	return seq;
}

console.log(fibbonacci(10));