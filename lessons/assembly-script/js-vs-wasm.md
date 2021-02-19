---
path: "/assembly-script/jsvwasm"
section: "AssemblyScript"
order: "3K"
title: "JS vs Wasm"
description: ""

---


###### [Working repo](https://github.com/young/intro-to-web-assembly/tree/main/lessons/assembly-script/exercises/7/iwasm)
Let's do simple experiment to see which is faster: JavaScript or Web Assembly?

> prime function from this excellent [logrocket post](https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/)

```js
export function isPrimeWasm(x: u32): bool {
  if (x < 2) {
      return false;
  }

  for (let i: u32 = 2; i < x; i++) {
      if (x % i === 0) {
          return false;
      }
  }

  return true;
}
```

```html
<!DOCTYPE html>
<html>
<body>
  <input id="primeIn"/>
  <script src="https://cdn.jsdelivr.net/npm/@assemblyscript/loader/umd/index.js"></script>

  <script src=/js/loader.js></script>
  <script>
    const el = document.getElementById("primeIn");

    function isPrimeJS(x) {
          if (x < 2) {
              return false;
          }

          for (let i = 2; i < x; i++) {
              if (x % i === 0) {
                  return false;
              }
          }
          return true;
      }

      const WL = new WasmLoader();
      WL.wasm('/build/optimized.wasm')
      .then(instance => {
        const { isPrimeWasm } = instance;
        el.addEventListener('keyup', () => {
          console.table(run(el.value))
        })
        function run(n) {
        const results = [];
          for (let i = 0; i < 1000; i++) {
          const timeStartWasm = performance.now();
          isPrimeWasm(n);
          const wasmTime = performance.now() - timeStartWasm;


          const timeStartJS = performance.now();
          isPrimeJS(n);
          const jsTime = performance.now() - timeStartJS;

          if (jsTime < wasmTime) {
            results.push('JavaScript');
          } else {
            results.push('WASM');
          }
        }

        return results.reduce((acc, item) => {
            if (item === 'JavaScript') {
                acc['JavaScript']++
            }
            if (item === 'WASM') {
                acc['WASM']++
            }
            return acc;
        }, {'JavaScript': 0, 'WASM': 0})

    }

      });
  </script>
</body>
</html>

```

So which is faster?
