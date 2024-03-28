let num = window.document.getElementById('itxtn')
let area = window.document.getElementById('iarea')
let res = window.document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if (isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Você adicionou o número ${num.value}.`
        area.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert ("Valor inválido ou já na lista. Verifique e tente novamente.")
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert("Adicione valores antes de continuar.")
    } else {
        valores.sort()

        let total = valores.length
        let menor = valores[0]
        let maior = valores[total-1]
        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
        }
        let média = soma/total

    

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} números adicionados.</p>`

        res.innerHTML += `<p> O menor número é ${menor}.</p>`

        res.innerHTML += `<p> O maior número é ${maior}.</p>`

        res.innerHTML += `<p> Somando os valores, dá ${soma}.</p>`

        res.innerHTML += `<p> A média é ${média}.</p>`



    }
}