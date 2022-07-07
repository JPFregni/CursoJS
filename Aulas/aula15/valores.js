let valores = [8, 1, 7, 4, 2, 9]

console.log('Valores desordenados:')
console.log('')
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`${valores[pos]}`)
}

console.log('')
valores.sort()
console.log('Valores ordenados:')
console.log('')

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`${valores[pos]}`)
}

console.log('')
console.log('For Simplificado:')
console.log('')
for (let p in valores) {
    console.log(`${valores[p]}`)
}