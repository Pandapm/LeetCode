/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxLength = 0;
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            length += 1;
            maxLength = maxLength < length ? length : maxLength;
        } else length = 0;
    }
    return maxLength;
};