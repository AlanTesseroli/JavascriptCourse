function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = ('Imagens/manha.jpg.jpg')
        document.body.style.background = 'yellow'
    }
    else if ( hora >= 12 && hora < 18){
        img.src = ('Imagens/tarde.jpg.jpg')
        document.body.style.background = 'brown'
    }
    else{
        img.src = ('Imagens/noite.jpg.jpg')
        document.body.style.background = 'blue'
        document.body.style.color = 'red'
    }
}