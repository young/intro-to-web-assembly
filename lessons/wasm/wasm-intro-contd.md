---
path: "/wasm/intro-contd"
section: "Web Assembly"

title: "Modules"
order: "2B"
description: ""
---

This is a wasm module that exports the function _add()_. The function takes to two 32-bit integers (`i32`), adds them together, and returns a 32-bit integer.

```wasm
(module
  (func $add (param $num1 i32) (param $num2 i32) (result i32)
    get_local $num1
    get_local $num2
    i32.add)
  (export "add" (func $add))
)
```

> A Web Assembly module is a tree-based structure known as an [S-expression](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format#s-expressions).


Function arguments are
