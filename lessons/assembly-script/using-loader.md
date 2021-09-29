---
path: "/assembly-script/loader-usage"
section: "AssemblyScript"
order: "3I"
title: "Using the AssemblyScript loader"
description: ""

---
###### [Working repo](https://github.com/young/intro-to-web-assembly/tree/main/lessons/assembly-script/exercises/5/iwasm)

Using the loader to fetch and instantiate our wasm lets us access some useful utility functions but we need to update our `WasmLoader` class to export them.

```js
// js/loader.js
// WasmLoader::wasm()
const instance = await loader.instantiateStreaming(fetch(path), imports);
return instance;
```

```js
// WasmLoader::wasmFallback()
const instance = await loader.instantiate(bytes, imports);
```

The instance methods include our exported wasm functions along with AssemblyScript utilities. We're reading a string from memory so we're going to use [__getString()](https://www.assemblyscript.org/loader.html#module-instance-utility).

```js
// index.html
 const { fizzbuzz, __getString } = instance;
const str = __getString(fizzbuzz(3));
document.write(str);
```

### BONUS

Let's check out the source code of `__getString`

```js
// Take a pointer as only argument
function __getString(ptr) {
```
```js
// Return null if there's no pointer
if (!ptr) return null;
```
```js
// Get reference to wasm memory
const buffer = memory.buffer;
```
```js
// Load wasm memory buffer into a 32 bit unsigned integer array
const id = new Uint32Array(buffer)
```
```js
// The memory location of the string is at pointer + the runtime header offset
// The location is then zero fill right shifted
[ptr + ID_OFFSET >>> 2];
```

```js
/** Reads a string from the module's memory by its pointer. */
function __getString(ptr) {
  if (!ptr) return null;
  const buffer = memory.buffer;
  const id = new Uint32Array(buffer)[ptr + ID_OFFSET >>> 2];
  if (id !== STRING_ID) throw Error(`not a string: ${ptr}`);
  return getStringImpl(buffer, ptr);
}
```
