function carregar () {
    var mensagem = window.document.getElementById("mensagem")
    var imagem = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    mensagem.innerHTML = `Agora são ${hora} horas. `

    if (hora > 5 && hora <= 12) {
        mensagem.innerHTML += `<br>Bom dia!`
        imagem.src = `imagens/manha.webp`
        document.body.style.background = "yellow"
    } else if ( hora > 12 && hora <= 19) {
        mensagem.innerHTML += `<br><strong>Boa tarde!</strong>`
        imagem.src = `imagens/tarde.webp`
        document.body.style.background = "pink"
    } else {
        mensagem.innerHTML += `<br>Boa noite!`
        imagem.src = `imagens/noite.webp`
        document.body.style.background = "darkblue"
    }
}



