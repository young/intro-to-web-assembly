---
path: "/assembly-script/writing"
section: "AssemblyScript"
order: "3D"
title: "Writing AssemblyScript"
description: ""
---
###### [Working repo](https://github.com/young/intro-to-web-assembly/tree/main/lessons/assembly-script/exercises/1/iwasm)

Let's start off with our minusOne example.

```js
export function minusOne(n) {
  return n - 1;
}
```


Converting this function to AssemblyScript is straightforward. We just need to add types for the function argument and return value. AssemblyScript automatically looks in the `/assembly` directory for files to compile.

```js
// /assembly/index.ts
export function minusOne(n: i32): i32 {
  return n - 1;
}
```

Let's convert our AssemblyScript to Web Assembly. The converted files are located in `/build/`.

```bash
npm run asbuild
```
