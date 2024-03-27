function tabuada() {
    let txtn = window.document.getElementById('in')

    let tabuada = window.document.getElementById('itabuada')
    
    if (txtn.value.length == 0) {
        window.alert("[ERRO] Verifique os dados e tente novamente.")
    } else {
        let n = Number(txtn.value)
        tabuada.innerHTML = `Tabuada do ${n}: `
        let c = 1
        
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tabuada.appendChild(item)
            c++
        }
        
    }
}