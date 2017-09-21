/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let pre = '';
    if(!strs.length) {
        return '';
    }
    const arr = strs[0].split('');
    for (let j = 0; j < arr.length; j++) {
        pre += arr[j];
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].indexOf(pre) != 0 ) {
                pre = pre.substr(0, pre.length -1);
            }
        }
    }
    return pre;
}
