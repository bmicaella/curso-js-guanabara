var msg = document.getElementById('msg')
var img = document.getElementById('timeImage')
var hour = new Date().getHours()
var minutes = new Date().getMinutes()

function horario() {
    switch (hour) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            img.innerHTML = '<img id="imagem" src="/images/noite.png" alt="Night">'
            document.body.style.background = 'linear-gradient(270deg ,#eeb140, #170b5a) fixed'
            msg.innerText = `Boa noite! Agora são ${hour}:${minutes} da noite :)`
            break
    
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            img.innerHTML = '<img id="imagem" src="/images/morning.png" alt="Morning">'
            document.body.style.background = 'linear-gradient(310deg ,#63310f, #d4a465) fixed'
            msg.innerText = `Bom dia! Agora são ${hour}:${minutes} da manhã :)` 
            break
    
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            img.innerHTML = '<img id="imagem" src="/images/tarde.png" alt="Afternoon">'
            document.body.style.background = 'linear-gradient(270deg ,#cf6824, #cfa124) fixed'
            msg.innerText = `Boa tarde! Agora são ${hour}:${minutes} da tarde :)`
            break
        
        default:
            msg.innerText = 'Erro. Favor recarregar a página.'
            break
    }
}
