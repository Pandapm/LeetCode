function getMedian(arr) {
    if (!arr || arr.length <= 0 ) return 0;
    var len = arr.length - 1;
    if ((len > 0) && (len % 2)) {
        var lower = Math.floor(len / 2);
        var higher = Math.ceil(len / 2);
        return (arr[lower] + arr[higher]) / 2;
    } else {
        return arr[len / 2];
    }
}

function com(firArr, secArr) {
    var newArr = [];
    var i = 0, j = 0;
    while(i < firArr.length && j < secArr.length) {
        if (firArr[i] <= secArr[j]) {
            newArr.push(firArr[i]);
            i ++;
        } else {
            newArr.push(secArr[j]);
            j ++;
        }
    }
    if (i < firArr.length) {
        for(var x = i; x < firArr.length; x ++) {
            newArr.push(firArr[x]);
        }
    } else if (j < secArr.length) {
        for(var y = j; y < secArr.length; y ++) {
            newArr.push(secArr[y]);
        }
    }
    return newArr
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    return getMedian(com(nums1, nums2))
};
