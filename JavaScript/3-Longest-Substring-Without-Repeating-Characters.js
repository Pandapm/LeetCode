/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = [];
    let len = maxLen = 0;
    let i = 0;
    while (i < s.length) {
        if (map.indexOf(s[i]) < 0) {
            len++;
        } else {
            let index = map.indexOf(s[i]);
            len = len - index;
            map = map.slice(index + 1);
        }
        map.push(s[i]);
        maxLen = maxLen > len ? maxLen : len;
        i++;
    }
    return maxLen;
};
