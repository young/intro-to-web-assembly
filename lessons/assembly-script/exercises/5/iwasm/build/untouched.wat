(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (memory $0 1)
 (data (i32.const 12) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00a\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 44) "\1c\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\02\00\00\00b\00\00\00\00\00\00\00\00\00\00\00")
 (table $0 1 funcref)
 (global $~lib/memory/__data_end i32 (i32.const 76))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 16460))
 (global $~lib/memory/__heap_base i32 (i32.const 16460))
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
  i32.const 3
  i32.eq
  if
   i32.const 32
   return
  end
  i32.const 64
 )
)
