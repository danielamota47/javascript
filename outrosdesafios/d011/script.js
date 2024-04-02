function verificar(){
    let ano = window.prompt(`Qual é o ano que deseja verificar?`)
    let res = window.document.getElementById('res')


    res.innerHTML = `<h2>Analisando o ano de ${ano}</h2>`
    
    if (ano % 4 == 0 && ano % 100 != 0 ) {
        if (ano % 400 == 0) {
            res.innerHTML += `O ano ${ano} <span style= "background-color: red"; color: darkred">NÃO É BISSEXTO! \u{e99a}`
        } else {
            res.innerHTML += `O ano ${ano} <span style= "background-color: lightgreen; color: green">É BISSEXTO! \u{e5ca}`
        }
    } else {
        res.innerHTML += `O ano ${ano} <span style= "background-color: red"; color: darkred">NÃO É BISSEXTO! \u{e99a}`
    }

}
