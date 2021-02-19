---
path: "/assembly-script/imports"
section: "AssemblyScript"
order: "3G"
title: "Imports"
description: ""
---
###### [Working repo](https://github.com/young/intro-to-web-assembly/tree/main/lessons/assembly-script/exercises/3/iwasm)

Just as we can export wasm functions, we can import JS functions into our code. One useful import is the `abort()` function which we call if we want terminate execution of wasm a function.

Call `abort()` if the function input is 44.
```js
// assembly/index.ts
export function minusOne(n: i32): i32 {

  if (n == 44) {
    abort();
  }

  return n - 1;
}
```
Compile our wasm
```bash
$ npm run asbuild
```

Loading the browser we see an error:
`Imports argument must be present and must be an object`

This is because `abort()` isn't currently defined in the context of our wasm yet. The import object is defined in the second argument of `instantiateStreaming()` and `instantiate()`.


Create an import object with an `abort()` function.

```js
// js/loader.js
    constructor() {
       this._imports = {
            env: {
                abort() {
                    throw new Error('Abort called from wasm file');
                }
            }
        };
    }
}
```

Add the import object to both methods
```js
// js/loader.js
   async wasm(path, imports = this._imports) {
        console.log(`fetching ${path}`);

        if (!WebAssembly.instantiateStreaming) {
            return this.wasmFallback(path, imports);
        }

        const { instance } = await WebAssembly.instantiateStreaming(fetch(path), imports);

        return instance?.exports;
    }

    async wasmFallback(path, imports) {
        console.log('using fallback');
        const response = await fetch(path);
        const bytes = await response?.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(bytes, imports);

        return instance?.exports;
    }
```
Loading the page now throws an exception. Remove the `abort()` call for now and rebuild the wasm code.

#### Defining imports
###### [Working repo](https://github.com/young/intro-to-web-assembly/tree/main/lessons/assembly-script/exercises/3/iwasm)

AssemblyScript has several [imports built into its loader](https://www.assemblyscript.org/exports-and-imports.html#imports-2) (which we'll cover a bit later) so we didn't have to manually declare `abort()`. For other JavaScript functions imported into AssemblyScript we need to define them before they can be imported.

To define a custom import in AssemblyScript we declare it's function signature. Here we're defining a log function that will allow us to call `console.log()` from Web Assembly code.

```js
// assembly/index.ts
declare function log(n: i32): void

export function minusOne(n: i32): i32 {
  log(n);
  return n - 1;
}
```

Add the function to the import object.
```js
// js/loader.js
    constructor() {
       this._imports = {
            env: {
                abort() {
                    throw new Error('Abort called from wasm file');
                }
            },
            index: {
                log(n) {
                    console.log(n);
                }
            }
        };
    }
```
