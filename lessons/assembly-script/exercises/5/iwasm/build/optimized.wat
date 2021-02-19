(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (memory $0 1)
 (data (i32.const 1036) ",")
 (data (i32.const 1048) "\01\00\00\00\10\00\00\00f\00i\00z\00z\00b\00u\00z\00z")
 (data (i32.const 1084) "\1c")
 (data (i32.const 1096) "\01\00\00\00\08\00\00\00f\00i\00z\00z")
 (data (i32.const 1116) "\1c")
 (data (i32.const 1128) "\01\00\00\00\08\00\00\00b\00u\00z\00z")
 (export "minusOne" (func $assembly/index/minusOne))
 (export "fizzbuzz" (func $assembly/index/fizzbuzz))
 (export "memory" (memory $0))
 (func $assembly/index/minusOne (param $0 i32) (result i32)
  local.get $0
  i32.const 1
  i32.sub
 )
 (func $assembly/index/fizzbuzz (param $0 i32) (result i32)
  local.get $0
  i32.const 15
  i32.rem_s
  i32.eqz
  if
   i32.const 1056
   return
  end
  local.get $0
  i32.const 3
  i32.rem_s
  i32.eqz
  if
   i32.const 1104
   return
  end
  local.get $0
  i32.const 5
  i32.rem_s
  i32.eqz
  if
   i32.const 1136
   return
  end
  i32.const 0
 )
)
