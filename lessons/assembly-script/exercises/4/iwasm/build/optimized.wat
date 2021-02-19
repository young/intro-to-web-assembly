(module
 (type $i32_=>_none (func (param i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (import "index" "log" (func $assembly/index/log (param i32)))
 (memory $0 0)
 (export "minusOne" (func $assembly/index/minusOne))
 (export "memory" (memory $0))
 (func $assembly/index/minusOne (param $0 i32) (result i32)
  local.get $0
  call $assembly/index/log
  local.get $0
  i32.const 1
  i32.sub
 )
)
