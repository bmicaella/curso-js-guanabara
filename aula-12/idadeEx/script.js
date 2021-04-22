function idade() {
    var year = document.getElementById('year')
    var sex = document.getElementsByName('sex')
    var res = document.querySelector('div#res')
    var ano = new Date().getFullYear()
    var age = ano - Number(year.value)

    if (year.value.length == 0 || year.value > ano) {
        window.alert(`verifique o ano inserido`)
    } else {
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (sex[0].checked ) {
                if (age <= 12) {
                    img.setAttribute('src', '3.png')
                    genero = 'menina'
                } else {
                    img.setAttribute('src', '2.png')
                    genero = 'mulher'
                }
        } else if (sex[1].checked) {
            if (age <= 12) {
                img.setAttribute('src', '1.png')
                genero = 'menino'
            } else {
                img.setAttribute('src', '4.png')
                genero = 'homem'
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${age} anos`
        res.appendChild(img)
    }
}
//res.innerHTML = `mulher de ${age} anos <p> <img src="/images/morning.png" alt=""> </p>`
//res.innerHTML = `homem de ${age} anos <p> <img src="/images/morning.png" alt=""> </p>`