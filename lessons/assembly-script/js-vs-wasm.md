---
path: "/assembly-script/memory"
section: "AssemblyScript"
order: "3K"
title: "JS vs Wasm"
description: ""

---
Let's do simple experiment to see which is faster: JavaScript or Web Assembly?

> prime function from this excellent [logrocket post](https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/)

```js
export function isPrimeWasm(x: u32): bool {
  if (x < 2) {
      return false;
  }

  for (let i: u32 = 2; i < x; i++) {
      if (x % i === 0) {
          return false;
      }
  }

  return true;
}
```

```html

```

So which is faster?
