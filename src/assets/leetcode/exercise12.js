/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var table = [
        { val: 1000, str: "M" },
        { val: 900, str: "CM" },
        { val: 500, str: "D" },
        { val: 400, str: "CD" },
        { val: 100, str: "C" },
        { val: 90, str: "XC" },
        { val: 50, str: "L" },
        { val: 40, str: "XL" },
        { val: 10, str: "X" },
        { val: 9, str: "IX" },
        { val: 5, str: "V" },
        { val: 4, str: "IV" },
        { val: 1, str: "I" }
    ];

    var str = '';
    var curVal, curStr;
    for (var i = 0; i < table.length; i++) {
        if (num === 0) break;
        curVal = table[i].val;
        curStr = table[i].str;
        while (num >= curVal && num > 0) {
            num -= curVal;
            str += curStr;
        }
    }

    return str;
};