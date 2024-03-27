let num = [1,2,5,8,9]

// para mostrar os elementos do array de maneira bonitinha
//pos(ição) vai representar a chave/índice

for (let pos = 0; pos < num.length; pos++){
    console.log(`O elemento ${pos} tem o valor ${num[pos]}`)
}



for(let pos in num) {
    console.log(`A chave ${pos} tem o valor ${num[pos]}`)
}


console.log(`O valor 8 está no elemento de chave ${num.indexOf(8)}`)

pos = num.indexOf(7)
if (pos == -1) {
    console.log(`O elemento na chave 7 não existe`)
} else {
    console.log(`O elemento de valor 2 é ${pos}`)
}