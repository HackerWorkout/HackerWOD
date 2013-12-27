# CoffeeScript

console.log "Working up"

# Had a little trouble with the warmup, so I 
SimpleFunc = (funcA) -> 
    console.log "A"
    console.log "B"

SimpleFunc null


WrapperFunc = (funcA) -> 
    console.log "A"
    funcA()
    console.log "B"

WrapperFunc () -> console.log "C"