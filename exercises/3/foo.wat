(module
  (export "name" (func $name)
  (func $name (param $param1 i32) (result i32)
  ;; Body
  )
  (export "name" (func $return))
)

;; Opcode to use
;; i32.rem_s
;; i32.get

(module
  (export "fizzbuzz" (func $fizzbuzz))
  (func $fizzbuzz (param $x i32) (result i32)
  (if
  (i32.rem_s
    (i32.const 3)
    (get_local $x)
    (i32.eq)
    (i32.const 0)
  )
  (return (i32.const 12))
  )

  (return (i32.const 12))
  )
