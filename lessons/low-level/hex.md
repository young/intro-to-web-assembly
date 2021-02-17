---
path: "/low-level/hex"
title: "Hexadecimal"
order: "1D"
description: ""
section: "Low Level Stuff"
---

The phrase _machine code_ is often used when describing low-level programming and it conjours images of engineers reading pages of ones and zeroes. In reality, most humans would be unable to follow endless blocks of ones and zeroes thus _hexadecimal_ serves as an intermediate step: concise enough for machines but readable enough for humans and is the lowest level programming language.

> Note: I don't expect you to memorize how to read hexadecimal. This is more of an FYI because Web Assembly error and opcodes are often presented in hex.

Hexadecimal uses Base 16 for calculating byte values and the letters A through F represent the numbers 10 through 15 respectively.

| Decimal      | Hexadecimal |
| ----------- | ----------- |
| 0      | 00       |
| 1     | 01       |
| 2      | 02       |
| ..      | ..       |
| 9      | 09       |
| 10      | 0A       |
| 11      | 0B       |
| 12      | 0C       |
| 13      | 0D       |
| 14      | 0E       |
| 15      | 0F       |
| 16      | 10       |
| 17      | 11       |
| 18      | 12       |
![hex](./images/hex.png)

`2E7` = 743\
(**256** * 2) + (**16** * 14) + (**1** * 7) = 743

Confused? Totally ok! The first time coming across hex may seem a bit daunting but it's easy to see the advantage of hex when it comes to brevity and readabilty as compared with binary.

`1A7` = 423\
`110100111` = 423

I've found this [site](https://www.bbc.co.uk/bitesize/guides/z3fgcdm/revision/2) by the BBC useful for understanding hexadecimal.


#### Exercise
<details>
  <summary>What number does 1F7 represent?</summary>

`503`
</details>
