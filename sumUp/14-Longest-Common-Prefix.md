## 题目描述

Write a function to find the longest common prefix string amongst an array of strings.

找到给出的字符串的最长公共前缀。

## 第一次解

以给出的第一个字符串作为一个字符数组准进行遍历（第一层循环），第二层循环中依次确定剩余的字符串前缀是否是当前已遍历的字符数组，只要出现不匹配的情况就退出循环，得到最长前缀。

```js
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
```

## 第二次解

比如传入的字符串数组是['abc', 'abd', 'abcd', 'abcef', 'ac']， 如果给这个数组排序，排完结果就是['abc', 'abcd', 'abcef', 'abd', 'ac']， 由于排序是按字母表的顺序进行的，很明显，有共同前缀（无论前缀长短）的字符串被放在了一起，这样只需判断最后一个字符串和第一个字符串的最长公共前缀即可得出整个字符串数组的最长公共前缀。

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let pre = [''];
    if (!strs.length) {
        return '';
    }
    strs.sort();
    const arr1 = strs[0].split('');
    const arr2 = strs[strs.length - 1].split('');
    for (let j = 0; j < arr1.length; j++) {
        if (arr2[j] === arr1[j] && arr2.length > j) {
            pre.push(arr2[j])
        } else {
            if (pre.length) return pre.join('');
            else return '';
        }
    }
    return pre.join('')
};
```
