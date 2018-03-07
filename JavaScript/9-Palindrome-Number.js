/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var rev = 0;
    var savedX = x;
    if (savedX < 0) return false;
    while(savedX) {
        rev = rev * 10 + savedX % 10;
        savedX = parseInt(savedX / 10);
    }
    return rev === x || rev === -x;
};
