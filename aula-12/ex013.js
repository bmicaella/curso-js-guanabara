var agora = new Date()
var hora = agora.getHours()

console.log(`agora são ${hora} horas`)
if (hora >= 12 && hora < 18) {
    console.log('boa tarde!')
} else if (hora >= 18 || hora == '0') {
    console.log('boa noite!')
} else if (hora >= 1 && hora <= 4) {
    console.log('boa madrugada!')
} else {
    console.log('bom dia!')
}