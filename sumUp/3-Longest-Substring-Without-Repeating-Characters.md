## 题目描述
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

找出一个字符串中最长的没有重复字母的子串的长度

## 第一次解

第一想法，遍历字符串，用Map存已经遍历了的元素，每次将tempLength+1，如果在Map中找到了当前元素，就清空Map，tempLength变成1，每次循环下来比较maxLength和tempLength，取其大者赋值给maxLength。
不出意外的出错了，因为没有考虑Map中匹配到的当前字符后面还有若干未重复字符的情况，比如abac，遍历到第二个a的时候把Map中的b也给清除掉了。
仔细观察一下刚才出错的“特殊值”（其实并不特殊），发现每次不必清空Map，而将匹配到的值以及前面的内容清除掉即可，比如abcad，遍历到第二个a的时候，让Map向后滑动一个位置，清除a（以及a前面的内容）。

```js
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
```