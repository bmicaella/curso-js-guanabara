let num = [4, 5, 6, 7, 8]

//mostrar todos os elementos de um array

for (i = 0 ; i < num.length ; i++) {
	console.log(`a posição ${i} tem valor ${num[pos]}`)
}

for( let i in num ) {
    console.log(num[i])
}

//pra saber se tem um 7 no array

let position = num.indexOf(7)

if(position == -1) {
    console.log('valor não encontrado')
} else if (position == 7) {
    console.log(`'valor encontrado na posição ${i}'`)
}