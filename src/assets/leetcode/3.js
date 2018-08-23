/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    
    // base case
    if (len === 0 || len === 1) { return len; }
    
    var longestLength = 0;
    var currentLength = 0;
    var thisChar = null;
    var lastUniq = 0;
    var substringMap = new Map();
    for (var i = 0; i < len; i++) {
        thisChar = s.charAt(i);
        
        if (substringMap.has(thisChar)) {
            // get last unique character index
            lastUniq = substringMap.get(thisChar) + 1;
            
            // reset current length tracker and map
            substringMap.clear();
            currentLength = 0;
            
            // add current string up to now
            for (var j = lastUniq; j < i; j++) {
                substringMap.set(s.charAt(j), j);
                currentLength++;
            }
        
        }
        
        // add to map and increment length
        substringMap.set(thisChar, i);
        currentLength++;
        
        // check if this substring is the longest
        if (currentLength > longestLength) {
            longestLength = currentLength;
        }
    }
    
    
    return longestLength;
}