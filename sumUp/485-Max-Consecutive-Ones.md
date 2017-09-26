## 题目描述

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
  > Input: [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s.
        The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

找出数组里最长的连续1的个数，数组里只有1和0两个元素

## 解

很简单的一个思路，遍历数组，如果是1，长度++；如果不是1，长度归0，每次循环后取上次循环的时候的最长长度和当前长度的较大者作为最长长度。
