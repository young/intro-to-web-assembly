---
path: "/low-level/types"
title: "Numeric types"
order: "1G"
description: ""
section: "Low Level Stuff"
---

The two main types of numbers we care about are floating points and integers.

###### Floating Point
`142.24`

###### Integer
`142`

JavaScript only has floating point numbers but most environments don't display the dot after a number.

``` js
21.000
// 21
```

> Note: [Number.MAX\_SAFE\_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) shows the largest integer that can be safely used in JavaScript.


Under the hood, numbers in JavaScript are 64-bit floating points whereas in Web Assembly all memory pointers are 32-bits.


![32 bits](./images/32bits.png)

This is important because understanding memory is fundemental to working with Web Assembly.
