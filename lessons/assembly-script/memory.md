---
path: "/assembly-script/memory"
section: "AssemblyScript"
order: "3J"
title: "Memory"
description: ""

---
![memory as ones and zeros](./images/memory.png)

Memory in Web Assembly is linear. The easiest way to visualize it is to think of a long unbroken chain of 0's and 1's. When we instantiate a wasm module, a fixed portion of memory is allocated to the process and all data passed between wasm and JavaScript takes place in this fixed portion of space. This contrasts with JavaScript memory which utilizes both a stack and heap.

> A heap is dynamic, non-linear memory used by a program to arbitrarily read and store data.

#### ArrayBuffers

Naturally we need a way to read and write to this fixed memory space. Other languages have pointers, addresses to specifc locations in memory, whereas in JavaScript we have to use an `ArrayBuffer` object. An `ArrayBuffer` is an object that represents raw binary data. A `SharedArrayBuffer` is an ArrayBuffer that represents a fixed-length portion of memory that can be shared by multiple processes. `WebAssembly.Memory` is the name of the memory shared by JavaScript and WebAssembly that is used to pass data back and forth.

Because `ArrayBuffer` `SharedArrayBuffer` are merely representations of raw binary data, we need to use a `TypedArray` to properly coerce the raw data into something useable by our processes.

#### Memory and TypedArrays

Create an ArrayBuffer and allocate 1 page (64Kb) of memory
```js
const memory = new WebAssembly.Memory({ initial: 1, shared: true });
```

Create an array-like object where each index is a pointer to a 16-bit unsigned integer
```js
const u16Array = new Uint16Array(memory.buffer);
```

We can now directly write into memory and the number 42 will be accessible by both JavaScript and Web Assembly
```js
u16Array[0] = 42;
```

#### Memory in AssemblyScript
###### [Working repo](https://github.com/young/intro-to-web-assembly/tree/main/lessons/assembly-script/exercises/6/iwasm)

```js
// assembly/index.ts
// Grow memory by 2 pages (128Kb)
memory.grow(2);
// Save 21 at index 0
store<u8>(0, 21);
// Save 99 at index 1
store<u8>(1, 99);

export function readMemory(n: i32): i32 {
    return load<u8>(n);
}
```


```js
// index.html
const { readMemory, memory } = instance;

const memoryArray = new Uint8Array(memory.buffer);
// Read from memory at index 1
// Returns 99
document.write(memoryArray[1]);
document.write('<br/>');
// Write to memory at index 2
memoryArray[2] = 42;
// Returns 42
document.write(readMemory(2));
```
