//let n = Number(document.getElementById("txtNumero").value);

//let tabuadaRes = '';


function tabuada() {
    //window.alert('baby i want it!')
    let n = Number(document.getElementById('txtNumero').value)
    let res = document.getElementById('res')
    //let n = Number(txtNumero.value)
    let tabuadaRes = ''
    
    res.innerHTML = ''

    if (n == 0) {
        window.alert('valor inválido. tente novamente')
    } else {
        for(var i = 0; i <= 10 ; i++) {
            tabuadaRes = n+" x "+i+" = "+(n*i)+"<br/>"
            res.innerHTML += tabuadaRes
        }
    
        res.style.background = 'linear-gradient(320deg , #8a0c96, #1316d6)'
        res.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.425)'
    }
}

function limpar() {
    res.innerHTML = ''
    res.style.background = ''
    res.style.boxShadow = ''
}