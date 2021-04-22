let n = document.querySelector('#txtNumber')
let tabela = document.querySelector('#valores')

let soma = 0
let result = document.querySelector('#result')
let numeros = []

function adicionar() {
    let item = document.createElement('option')

    if (n.value<=0 || n.value>100 || numeros.indexOf(Number(n.value)) > -1) { //tem q restringir p n entrar numero repetido
        result.innerHTML = 'Insira um valor válido.'
    } else {
        result.innerHTML = ''
        item.text = n.value
        tabela.appendChild(item)
        numeros.push(Number(n.value))
    }
   
}

function analise() {
    let maior = Math.max(...numeros)
    let menor = Math.min(...numeros)
    let tamanho = numeros.length

    /*for(i=numeros.length ; i>0 ; i--) {
        soma += numeros[i]
    }*/
    
    let soma = numeros.reduce( function(a,b) {
        return a+b
    }, 0)

    let media = soma/numeros.length

    result.innerHTML = `maior é ${maior} e menor é ${menor}, tamanho é ${tamanho}, soma é ${soma}, média é ${media}`
}

function limpar() {
    result.innerHTML = ''
    tabela.innerHTML = ''
    numeros = []
    console.log(numeros.length)
}