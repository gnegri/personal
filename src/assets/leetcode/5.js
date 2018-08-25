/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length;

    // base cases
    if (len === 0 || len === 1) return s;
    if (len === 2) {
        if (s.charAt(0) == s.charAt(1)) {
            return s;
        } else {
            return s.charAt(1);
        }
    }

    var end = len;
    var longestStr = '';
    var thischar = '';
    var j, k, currentStr;
    var palindrome = false;

    for (var i = 0; i < end; i++) {
        j = i - 1;
        k = i + 1;
        palindrome = false;

        // if this and the next character are the same,
        //   the 'base' s[i] and s[i + 1]
        while (s.charAt(i) == s.charAt(k)) {
            k++;
            palindrome = true;
        }

        while (s.charAt(j) == s.charAt(k) && j >= 0 && k < len) {
            j--;
            k++;
            palindrome = true;
        }

        if (palindrome == true) {
            currentStr = s.slice(Math.max(0, j + 1), Math.max(0, k));
            if (currentStr.length >= longestStr.length) {
                longestStr = currentStr;
            }
        }
    }

    if (longestStr == '') { longestStr = s.charAt(len - 1); }
    return longestStr;
};