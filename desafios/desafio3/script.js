function contar() {
    let txtinicio = window.document.getElementById('iinicio')
    let txtfim = window.document.getElementById('ifim')
    let txtpasso = window.document.getElementById('ipasso')

    let res = window.document.getElementById('contar')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 ||txtpasso.value.length == 0) {
        res.innerHTML = "Impossível contar"
        window.alert("[ERRO] Faltam dados. Tente novamente!")
    } else {
        
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        res.innerHTML = "Contando: "

        if (passo <= 0) {
            window.alert("Passo inválido. Considerar passo 1.")
            passo = 1
        }

        if(inicio < fim) {
            //contagem crescente
            for(let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //contagem decrescente
             for(let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449} `
             }
        }

        res.innerHTML += '\u{1F3C1}'
    }

}    