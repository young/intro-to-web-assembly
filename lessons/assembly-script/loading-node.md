---
path: "/assembly-script/loading-node"
section: "AssemblyScript"
order: "3E"
title: "Loading AssemblyScript - NodeJS"
description: ""
---
AssemblyScript automatically loads and imports your built wasm files into `index.js`.

```js
// index.js
const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { /* imports go here */ };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;
```


To run our compiled module we require `index.js` and call our exported wasm function.


```bash
$ node
```

```js
> const { minusOne } = require('./index.js');
> minusOne(2);
// 1
```
