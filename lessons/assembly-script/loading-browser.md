---
path: "/assembly-script/loading-browser"
section: "AssemblyScript"
order: "3F"
title: "Loading AssemblyScript - Browser"
description: ""
---
###### [Working repo](https://github.com/young/intro-to-web-assembly/tree/main/lessons/assembly-script/exercises/2/iwasm)

Now we get to the good stuff: using our Web Assembly in the browser just as nature intended.

All modern browsers have the `WebAssembly` global object that acts the primary API into Web Assembly. `WebAssembly` has five static methods:

- `WebAssembly.compile()` - Compile wasm
- `WebAssembly.compileStreaming()` - Compile wasm from a streamed source
- `WebAssembly.instantiate()` - Compile and instantiate wasm
- `WebAssembly.instantiateStreaming()` - Compile and instantiate wasm from a streamed source
- `WebAssembly.validate()` - Checks if wasm code is valid


#### Fetching wasm
We're fetching wasm from our server so let's use `instantiate()` and `instantiateStreaming()` to make a utility class for fetching and compiling our wasm.

```js
// js/loader.js

class WasmLoader {
    constructor(){}

    async wasm(path){}

    async wasmFallback(path){}
}
```

Our `wasm()` method takes a path to the wasm file and will return the exported wasm functions. The `wasmFallback()` method is for browsers that don't support `instantiateStreaming()`.

```js
// js/loader.js

class WasmLoader {
    constructor(){}

    async wasm(path) {
        console.log(`fetching ${path}`);

        if (!WebAssembly.instantiateStreaming) {
            return this.wasmFallback(path);
        }

        const { instance } = await WebAssembly.instantiateStreaming(fetch(path));

        return instance?.exports;
    }

    async wasmFallback(path){}
}
```

`wasmFallback()` works the same as `wasm()` with the exeception that we need to create an intermediate array buffer before instantiating our module.

```js
// js/loader.js

class WasmLoader {
    constructor(){}

    async wasm(path) {
        console.log(`fetching ${path}`);

        if (!WebAssembly.instantiateStreaming) {
            return this.wasmFallback(path);
        }

        const { instance } = await WebAssembly.instantiateStreaming(fetch(path));

        return instance?.exports;
    }

    async wasmFallback(path){
        console.log('using fallback');
        const response = await fetch(path);
        const bytes = await response?.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(bytes);

        return instance?.exports;
    }
}
```
#### Creating a server

`instantiateStreaming()` requires the wasm being fetched to have an `Content-Type: application/wasm` response header. Fortunately, [Express](https://expressjs.com/) will automatically add this header when serving requests for wasm files.

Install Express
```bash
$ npm i express --save
```

Create a simple server
```js
// server.js
const express = require('express');
const app = express();
// Serve static files from root (note: do not this in production code)
app.use(express.static('./'))

app.listen(3000, () => console.log('Server up on port 3000!'));
```
Add a run script to start the server
```js
// package.json
"server": "node server.js"
```

#### Loading in the browser

Let's import our `WasmLoader` and use it to access our `minusone()` function.

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<body>
  <div id="main"></div>
  <script src=/js/loader.js></script>
  <script>
      const WL = new WasmLoader();
      WL.wasm('/build/optimized.wasm')
        .then(instance => {
        const { minusOne } = instance;

        document.write(minusOne(44));
        });
  </script>
</body>
</html>
```

Navigate to `localhost:3000` and you will see _43_ on the page. Congratulations! We've written Web Assembly, loaded and compiled the module, and executed a wasm function 🎉. Now that we understand how to _export_ and run wasm functions in JavaScript, let's learn how to _import_ JS functions into Web Assembly.
