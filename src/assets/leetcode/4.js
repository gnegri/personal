/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums = nums1.concat(nums2).sort((a, b) => a - b);
    
    var numsLen = nums.length;
    var median;
    if (numsLen % 2 === 1) { // odd
        median = nums[(numsLen - 1) / 2];
    } else { // event
        median = (nums[(numsLen) / 2] + nums[(numsLen) / 2 - 1]) / 2;
    }
    
    return median;
};