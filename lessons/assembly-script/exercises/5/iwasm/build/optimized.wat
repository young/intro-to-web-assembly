(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (memory $0 0)
 (export "example" (func $assembly/index/example))
 (export "memory" (memory $0))
 (func $assembly/index/example (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 3
  i32.eq
  if (result i32)
   i32.const 3
   local.set $1
   i32.const 1
   local.set $2
   loop $while-continue|0
    local.get $1
    if
     local.get $0
     local.get $2
     i32.mul
     local.get $2
     local.get $1
     i32.const 1
     i32.and
     select
     local.set $2
     local.get $1
     i32.const 1
     i32.shr_u
     local.set $1
     local.get $0
     local.get $0
     i32.mul
     local.set $0
     br $while-continue|0
    end
   end
   local.get $2
  else
   local.get $0
   local.get $0
   i32.mul
  end
 )
)
