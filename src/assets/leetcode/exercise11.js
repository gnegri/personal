/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) { // (diff in position) * (min height)
    var distance, min, volume;
    var i = 0,
        j = height.length - 1;
    var hI, hJ;
    var greatest = 0;
    while (i <= j) {
        hI = height[i];
        hJ = height[j];
        min = Math.min(hI, hJ);
        distance = j - i;
        volume = min * distance;
        if (volume > greatest) {
            greatest = volume;
        }
        if (hI > hJ) {
            j--;
        } else {
            i++;
        }
    }
    return greatest;

};