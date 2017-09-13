/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function towSum(nums, target) {
    var resSet = new Set();
    nums.forEach((num, index) => {
        if (nums.indexOf(target - num, index - nums.length + 1) > -1) {
            resSet.add(index);
            resSet.add(nums.indexOf(target - num, index - nums.length + 1));
        }
    })
    return Array.from(resSet).sort();
};
