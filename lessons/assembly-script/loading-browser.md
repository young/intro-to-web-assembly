---
path: "/assembly-script/loading-browser"
section: "AssemblyScript"
order: "3F"
title: "Loading AssemblyScript - Browser"
description: ""
---
Now we get to the good stuff: using our Web Assembly the browser just as nature intended.

All modern browsers have the `WebAssembly` global object that acts the primary API into Web Assembly. `WebAssembly` has five static methods:

- `WebAssembly.compile()` - Compile wasm
- `WebAssembly.compileStreaming()` - Compile wasm from a streamed source
- `WebAssembly.instantiate()` - Compile and instantiate wasm
- `WebAssembly.instantiateStreaming()` - Compile and instantiate wasm from a streamed source
- `WebAssembly.validate()` - Checks if wasm code is valid

We're fetching wasm from our server so lets use `instantiate()` and `instantiateStreaming()` to make a utility class for fetching and compiling our wasm.
```js
// js/loader.js

class WasmLoader {
    constructor(){}

    wasm(path){}

    wasmFallback(path){}
}
```

Our `wasm()` method takes a path to the wasm file and will return the exported wasm functions. The `wasmFallback()` method is for browsers that don't support `instantiateStreaming()`.

```js
// js/loader.js

class WasmLoader {
    constructor(){}

    wasm(path) {
        console.log(`fetching ${path}`);

        if (!WebAssembly.instantiateStreaming) {
            return this.wasmFallback(path);
        }

        const { instance } = await WebAssembly.instantiateStreaming(fetch(path));

        return instance?.exports;
    }

    wasmFallback(path){}
}
```
