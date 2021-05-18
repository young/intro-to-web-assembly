---
path: "/assembly-script/setup"
section: "AssemblyScript"
order: "3C"
title: "AssemblyScript Setup"
description: ""
---

###### [Working repo](https://github.com/young/intro-to-web-assembly/tree/main/lessons/assembly-script/exercises/1/iwasm)

Let's get our environment set up.



#### Setup

Make sure we’re on latest version of node
> We need to be version 14 or above.

```bash
$ nvm install --lts
```

Install npx
```bash
$ npm i -g npx
```

Create working directory
```bash
$ mkdir iwasm && cd iwasm
```

Install the loader
```bash
$ npm i --save @assemblyscript/loader
```

Install AssemblyScript
```bash
$ npm i --save-dev assemblyscript
```


Scaffold and build an empty project
```bash
$ npx asinit .
$ npm run asbuild
```

##### Note
We're following the official AssemblyScript [quick start guide](https://www.assemblyscript.org/quick-start.html)
