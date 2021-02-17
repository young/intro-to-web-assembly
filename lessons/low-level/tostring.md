---
path: "/low-level/tostring"
title: "The underrated .toString() method"
order: "1E"
description: ""
section: "Low Level Stuff"
---

All of this value conversion is a lot of mental overhead. Fortunately we can utilize JavaScript to make our lives easier.

#### `Object.prototype.toString(radix)`

[toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) returns a string representation of an object. It takes an optional `radix` parameter.

> _radix_ is the number of unique digits. It is also known as _base_

| Radix/Base      | Type |
| ----------- | ----------- |
| 2      | binary       |
| 10     | decimal       |
| 16     | hexadecimal       |


#### Exercise

<details>
  <summary>Write a function that converts from hexadecimal to decimal</summary>

```js
function hexToDecimal(hex) {
  return (hex).toString(10);
}
```
</details>

<details>
  <summary>Write a function that converts from decimal to binary</summary>

```js
function decimalToBinary(num) {
  return (num).toString(2);
}
```
</details>
