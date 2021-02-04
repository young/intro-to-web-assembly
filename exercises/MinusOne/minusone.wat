(module
  (export "minusone" (func $minusone))
  (func $minusone (param $x i32) (result i32)
      get_local $x
      i32.const 1
      i32.sub
  )
)
