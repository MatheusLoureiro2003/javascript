function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#737a59'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#e89e6f'
    }
    else {
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#18344d'
    }
}


//tarde:e89e6f
//manha:737a59
//noite:18344d
