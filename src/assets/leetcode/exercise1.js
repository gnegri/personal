/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var pair = [];
    for (var j = 0; j < nums.length; j++) {
        for (var k = j + 1; k < nums.length; k++) {
            if (nums[j] + nums[k] === target) {
                pair[0] = j;
                pair[1] = k;
                break;
            }
        }
    }
    
    return pair;
};