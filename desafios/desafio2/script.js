function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`itxtano`)
    var fotos = document.getElementById(`fotos`)

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var género = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // existe uma tag img com o id "foto" agora.
        
        if (fsex[0].checked) {
            género = 'homem'

            if (idade <= 2) {
                //bebé
                img.setAttribute ('src', '1-2.jpg')
            } else if (idade >= 3 && idade <= 10) {
                //3-10
                img.setAttribute ('src', '3-10 homem.jpg')
            } else if (idade >= 11 && idade < 20) {
                //11-20
                img.setAttribute ('src', '11-20 menino.webp')
            } else if (idade >=21 && idade <= 40){
                //21-40
                img.setAttribute ('src', '21-40 homem.webp')
            } else if (idade >=41 && idade <= 60) {
                //41-60
                img.setAttribute ('src', '41-60 homem.jpg')
            } else {
                //61+
                img.setAttribute ('src', '61+ homem.webp')
            }

        } else if (fsex[1].checked){
            género = 'mulher'

            if (idade <= 2) {
                //bebé
                img.setAttribute ('src', '1-2.jpg')
            } else if (idade >= 3 && idade <= 10) {
                //3-10
                img.setAttribute ('src', '3-10 menina.jpg')
            } else if (idade >= 11 && idade < 20) {
                //11-20
                img.setAttribute ('src', '11-20 menina.webp')
            } else if (idade >=21 && idade <= 40){
                //21-40
                img.setAttribute ('src', '21-40 mulher.avif')
            } else if (idade >=41 && idade <= 60) {
                //41-60
                img.setAttribute ('src', '41-60 mulher.jpg')
            } else {
                //61+
                img.setAttribute ('src', '61+ mulher.avif')
            }
        }
    }

    
    fotos.innerHTML = `Detectamos ${género} de ${idade} anos.`
    fotos.appendChild(img)

} 