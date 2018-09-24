/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var table = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var total = 0;
    var thisVal, nextVal;
    for (var i = 0; i < s.length; i++) {
        thisVal = table[s.charAt(i)];
        nextVal = table[s.charAt(i + 1)];
        total += thisVal;
        if (nextVal > thisVal) {
            total -= 2 * thisVal;
            total += nextVal;
            i++;
        }

    }

    return total;
};