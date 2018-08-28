/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length;
    var str = '';
    if (numRows <= 1 || len < 3 || numRows >= len) { return s; }
    if (numRows == 2) {
        for (var n = 0; n < len; n += 2) {
            str += s.charAt(n);
        }
        for (var m = 1; m < len; m += 2) {
            str += s.charAt(m);
        }
        return str;
    }

    var totalInterval = (numRows * 2) - 2;

    // first row
    for (var i = 0; i < len; i += totalInterval) {
        str += s.charAt(i);
    }

    // middle rows
    var curIndex;
    var interCols = numRows - 2;
    var skip = totalInterval;
    for (var j = 0; j < interCols; j++) {
        skip -= 2;
        curIndex = j + 1;
        str += s.charAt(curIndex);
        while (curIndex < len) {
            str += s.charAt(curIndex + skip);
            str += s.charAt(curIndex + totalInterval);
            curIndex += totalInterval;
        }
    }

    // last row
    for (var k = numRows - 1; k < len; k += totalInterval) {
        str += s.charAt(k);
    }

    return str;
};