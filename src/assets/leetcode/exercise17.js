/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var table = ['', '', // 0, 1
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    var ans = [];
    var num;
    var chars = [];
    var ptrs = [];
    for (var i = 0; i < digits.length; i++) {
        num = +digits.charAt(i);
        chars.push(table[num]);
        ptrs.push(0); // keep track of an arbitrary # of ptrs
    }
    var ptr = ptrs.length - 1; // position in ptrs array
    while (ptr >= 0) {
        ptr = ptrs.length - 1; // position in ptrs array

        var str = '';
        for (var j = 0; j < chars.length; j++) {
            str += chars[j][ptrs[j]];
        }
        ans.push(str);

        ptrs[ptr]++;
        while (ptrs[ptr] >= chars[ptr].length) {
            ptrs[ptr] = 0;
            ptr--;
            if (ptr < 0) break;
            ptrs[ptr]++;
        }

    }

    return ans;
};