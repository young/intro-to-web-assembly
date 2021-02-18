---
path: "/wasm/memory"
section: "Web Assembly"
title: "Memory"
order: "2F"
description: ""
---

#### Stacks

A stack is memory region where variables are stored and accessed by the running program. Once execution is complete, the stack is cleared.

> While similar in concept, a Stack is data structure that stores information in Last In First Order (LIFO) and is not the as an execution stack.

Web Assembly is stack based language so all operations read and write to the stack in a linear fashion.

> You've probably heard of the call stack in JavaScript which is a reserved portion of memory the interpreter uses to keep track of running functions.

#### Heaps

A heap is dynamic, non-linear memory used by a program to arbitrarily read and store data.
