function fatorial() {
    let f = Number(document.getElementById('numero').value)
    let res = document.getElementById('res')
    let fat = 1

    for(i = f ; i>1 ; i--) {
        fat *= i 
    }
    
    res.innerHTML = (`O fatorial de ${f} é igual à ${fat}`)
}