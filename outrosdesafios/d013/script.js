function entrar() {
    let nome = window.prompt(`Qual é o nome do aluno?`)
    let n1  = window.prompt(`Primeira nota de ${nome}:`)
    let n2 = window.prompt(`Segunda nota de ${nome}`)
    let med = (Number.parseFloat(n1)+Number.parseFloat(n2)) / 2
    let res = window.document.getElementById('res')

    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas ${n1} e ${n2}, a média é <strong>${med}</strong></p>`
    if(med < 3) {
        res.innerHTML += `Com média abaixo de 3.0, o aluno está <span style= "background-color: red; color: darkred">REPROVADO`
    } else if (med >= 3 && med <= 6) {
        res.innerHTML += `Com média entre 3.0 e 6.0, o aluno está em <span style= "color: orange">RECUPERAÇÃO`
    } else {
        res.innerHTML += `Com média acima de 6.0, o aluno está <span style= "background-color: lightgreen; color: green">APROVADO`
    }
}