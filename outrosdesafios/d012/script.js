function verificar() {
    let ant = window.prompt(`Qual era o preço anterior do produto?`)
    let atu = window.prompt(`Qual é o preço atual do produto?`)
    let res = window.document.querySelector('div#res')

    res.innerHTML = `<h2>Analisar os valores informados</h2>`
    res.innerHTML += `O produto custava ${ant}€ e agora custa ${atu}€. <br>`

    if(Number.parseFloat(ant) < Number.parseFloat(atu)) {
        let aum = Number.parseFloat(atu) - Number.parseFloat(ant)
        let vari1 = (aum / Number.parseFloat(ant)) / 0.01
        res.innerHTML += `Hoje  o produto está mais caro. <br>`
        res.innerHTML += `O preço subiu ${aum}€ em relação ao preço anterior. <br>`
        res.innerHTML += `Uma variação de ${vari1}% para cima.`
    } else {
        let des = Number.parseFloat(ant) - Number.parseFloat(atu)
        let vari2 = (des/ Number.parseFloat(ant)) / 0.01
        res.innerHTML += `Hoje o produto está mais barato. <br>`
        res.innerHTML += `O preço caiu ${des}€ em relação ao preço anterior. <br>`
        res.innerHTML += `Uma variação de ${vari2}% para baixo.`
    }
}