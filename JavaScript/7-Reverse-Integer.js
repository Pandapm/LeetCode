/**
 * @param {number} 
 * @return {number}
 */
var reverse = function (x) {
    var res = 0;
    while (x != 0) {
        res = res * 10 + x % 10;
        x = parseInt(x / 10);
    }
    if (res > 2147483647 || res < -2147483648) {
        return 0;
    }
    return res;
};