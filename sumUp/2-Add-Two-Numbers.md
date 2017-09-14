## 题目描述

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

用链表的形式表示值而且值中数字的顺序是倒序的，计算两个值相加的结果，结果也是倒序排列的。

## 第一次解

思路应该比较简单，同时遍历两个传入的列表，把对应位置上的值相加并加上前一位的进位，如果大于等于10则保存进位信息为1，接着进行下一个对应位置上的求和。
觉得比较复杂的可能是当一个链表遍历完了而另一个链表还没有结束的时候需要把长的链表剩余的部分加入到结果链表中，但是既然是相加，就可以认为遍历完了的那个链表后面还有若干值为0的节点。

```js
var addTwoNumbers = function (l1, l2) {
    let point = output = new ListNode(0);
    let carry = 0;
    while (l1 || l2 || carry) {
        l1 = l1 ? l1 : new ListNode(0);
        l2 = l2 ? l2 : new ListNode(0);
        let sum = l1.val + l2.val + carry;
        carry = sum >= 10 ? 1 : 0;
        point = point.next = new ListNode(sum % 10);
        l1 = l1.next;
        l2 = l2.next;
    }
    return output.next;
};
```
