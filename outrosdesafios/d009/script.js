function reajustar(){
    let nome = window.prompt(`Qual é o nome do funcionário?`)
    let sal = window.prompt(`Qual é o salário de ${nome}?`)
    let per = window.prompt(`O salário de ${nome} vai ser reajustado em qual percentagem?`)
    let res = window.document.getElementById('res')
    let aum = Number.parseFloat(sal) * Number.parseFloat(per) * 0.01
    let nsal = Number.parseFloat(sal) + aum

    res.innerHTML = `O salário atual era ${sal}€. <br>`
    res.innerHTML += `Com um aumento de ${per}%, o salário vai aumentar ${aum}€ no próximo mês. <br>`
    res.innerHTML += `E a partir daí, ${nome} vai passar a ganhar ${nsal}€.`
}