/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();

    // add all to map
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        var complementIx = map.get(complement);
        if (complementIx > -1 && complementIx !== i) {
            return [complementIx, i];
        }
        map.set(nums[i], i);
    }
};