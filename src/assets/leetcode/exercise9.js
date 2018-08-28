/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0) {
        return false;
    } else if (x < 10) {
        return true;
    }

    var s = x.toString();
    var len = s.length;

    if (len === 2) {
        if (s.charAt(0) === s.charAt(1)) {
            return true;
        } else {
            return false;
        }
    }

    var j, k;
    if (len % 2 === 1) { // odd
        j = (len - 1) / 2 - 1;
        k = j + 2;
    } else { // even
        k = len / 2 + 1;
        j = k - 3;
        if (s.charAt(j + 1) != s.charAt(k - 1)) {
            return false;
        }
    }


    while (s.charAt(j) === s.charAt(k) && j >= 0 && k < len) {
        if (j === 0 && k === len - 1) {
            return true;
        }
        j--;
        k++;
    }

    return false;


};