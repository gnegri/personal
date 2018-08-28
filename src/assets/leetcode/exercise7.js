/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) { return 0; }
    var str = x.toString();
    if (str.length <= 1) { return +str; }

    var startReverse = str.charAt(0) === '-' ? 1 : 0;
    var ret = startReverse ? '-' : '';
    var numString = str.slice(startReverse);

    ret += numString.split('').reverse().join('');

    var num = +ret;

    if (num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)) { return 0; }

    return +ret;
};