/*
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

function isTrianlge(a, b, a) {
    if (a + b > c || b + c > a || a + c > b) {
        var s = (a + b + c) / 2;
        if (Math.sqrt(s * (s - a) * (s - b) * (s - c))) {
            return true;
        }
    }
    return false;
}
