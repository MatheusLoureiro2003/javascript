let num = [8, 1, 7, 4, 2, 9]

/*for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
    for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
console.log(`O valor 8 está na posição ${pos}`)