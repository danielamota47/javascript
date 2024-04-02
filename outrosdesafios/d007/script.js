let cot = window.prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`)

function converter() {
    let eur = window.prompt(`Quantos EUR€ você tem na carteira?`)
    let dol = Number(eur) * Number(cot)
    let res = window.document.getElementById(`res`)

    res.innerHTML += `Você pode comprar ${dol}$ com ${eur}€ `
    

}