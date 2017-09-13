## 题目描述

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

*Note*:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

## 第一次解

- 保存数字的符号
- 数字转换成字符串
- 用split把字符串拆分成由每个数字组成的数组
- 对数组reverse反转一下
- 反转结果用join连接成一个字符串
- 字符串加上符号位
- parseInt把字符串转换成数字
- 判断有没有“溢出”

感觉这种做法像是在作弊...`reverse`是Array的方法，所以最重要的一步给省略了，而且无意中用`parseInt`避免了像是100这样的末尾是0的输入造成的坑，因此可以说最大的一个可能出错的地方也给省略了...

```js
/**
 * @param {number} 
 * @return {number}
 */
var reverse = function(x) {
    var flag = '';
    if(x < 0) {
        flag = '-';
    }
    var xStr = Math.abs(x).toString();
    var xArr = xStr.split('');
    var res = parseInt(flag + xArr.reverse().join(''));
    if(res > 2147483647 || res < -2147483648) {
        return 0;
    }
    return res;
};
```

把字符串和数组互相转了那么多次竟然都AC了，神奇，决定换个解法

## 第二次解

反转用一个很简单的像C一样的做法，

- 对输入的x对10取余获得最后一位
- 总结果乘10再加上取余来的最后一位
- x = x / 10, 循环以上三步

因为总结果sum初值为0，如果遇到100这样的输入，第一次循环计算完sum = 0 * 0 + 100 % 10, sum依然为0， 末位为0的输入不影响；
也因为每次都是数学运算，所以最终的符号位也不影响，用js写了下面的代码（错误答案）：

```js
var reverse = function (x) {
    var res = 0;
    while (x != 0) {
        res = res * 10 + x % 10;
        x = x / 10;
    }
    if (res > 2147483647 || res < -2147483648) {
        return 0;
    }
    return res;
};
```
乍一看没有问题，然而运行的时候sum一直增加最终出现了Infinity，才反应过来在x = x / 10一步出了问题，C语言默认除数和被除数全是整数的话会只取运算结果的整数位，但js不管这么多啊小数位该带的都给带着，于是加了一层parseInt（可以简单的把parseInt理解为只取整数部分），运行比第一次解的时间少了40多毫秒

```js
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
```
