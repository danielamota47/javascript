function calcular(){
    let pro = window.prompt(`Qual é o produto que estás a comprar?`)
    let pre = window.prompt(`Qual é o preço de ${pro}?`)
    let res = window.document.getElementById('res')
    let des = Number.parseFloat(pre) * 0.1
    let npre = Number.parseFloat(pre) - des

    res.innerHTML = `<h2>Calcular desconto de 10% para ${pro}</h2>`
    res.innerHTML += `O preço original era ${pre}€.<br>`
    res.innerHTML += `Acabas de ganhar ${des}€ de desconto (10%). <br>`
    res.innerHTML += `No fim, irás pagar ${npre}€ no produto ${pro}.`

}