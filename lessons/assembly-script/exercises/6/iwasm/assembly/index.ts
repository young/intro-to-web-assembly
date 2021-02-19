declare function log(n: i32): void

memory.grow(2);
store<u8>(0, 21);
store<u8>(1, 99);

export function readMemory(n: i32): i32 {
    const valueAtIndexOne = load<u8>(n);
    return valueAtIndexOne;
}



export function minusOne(n: i32): i32 {
  log(n);
  return n - 1;
}

export function fizzbuzz(n: i32): String | null {

  if (n % 15 === 0) {
    return 'fizzbuzz';
  }

  if (n % 3 === 0) {
    return 'fizz';
  }

  if (n % 5 === 0) {
    return 'buzz';
  }

  return null;
}
