function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo.value <= 0) {
        window.alert('valor(es) inválido(s)')
        res.innerHTML = ''
    } else if (fim.value > inicio.value) {
        res.innerHTML = '<p> contando..:</p>'
        for (let c = i; c <= f ; c += p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`
    } else if(inicio.value > fim.value) {
        res.innerHTML = '<p> contando..: </p>'
        for (let c = i; c >= f ; c -= p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`
    } else if (inicio.value == 0 && fim.value == 0) {
        window.alert('insira um intervalo válido')
        res.innerHTML = ''
    } else if (inicio.value == fim.value) {
        window.alert('insira um intervalo válido')
        res.innerHTML = ''
    }
    
}