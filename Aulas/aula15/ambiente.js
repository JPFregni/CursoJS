let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O primeiro valor do array é ${num[0]}`)
console.log(`Nosso vetor é o ${num}`)
console.log(`O array tem ${num.length} elementos`)

let pos = num.indexOf(8)
if(pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`A posição do número ${num[1]} é: ${pos}`)
}
