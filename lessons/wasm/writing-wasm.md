---
path: "/wasm/writing"
section: "Web Assembly"
title: "Writing Web Assembly"
order: "2D"
description: ""
---

Let's write something a bit more complicated. Create an equivalent function in Web Assembly:

```js
function example(n) {
  if (n === 2) {
    return n * 2;
  }

  if (n === 3) {
    return n * 3;
  }

  return n * n;
}
```

The equivalent Web Assembly function is a bit more...verbose

```wasm

 (func $example (param $0 i32) (result i32)
  get_local $0
  i32.const 2
  i32.eq
  if
   get_local $0
   i32.const 2
   i32.mul
   return
  end
  get_local $0
  i32.const 3
  i32.eq
  if
   get_local $0
   i32.const 3
   i32.mul
   return
  end
  get_local $0
  get_local $0
  i32.mul
 )
 ```

As we can see writing Web Assembly by hand isn't terribly practical. Fortunately we have AssemblyScript.
