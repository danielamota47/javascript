function converter() {
    let med = window.prompt("Digite uma distância em metros (m)")
    
    let res = window.document.querySelector('div#res')
    
    let km = med/1000
    let hm = med/100
    let dam = med/10
    let dm = med*10
    let cm = med*100
    let mm = med*1000

    res.innerHTML += `<h2> A distância de ${med} metros, corresponde a...</h2><br>`
    res.innerHTML += `${km} quilómetros (km)<br>`
    res.innerHTML += `${hm} hectómetros (hm)<br>`
    res.innerHTML += `${dam} decâmetros (dam) <br>`
    res.innerHTML += `${dm} decímetros (dm)<br>`
    res.innerHTML += `${cm} centímetros (cm)<br>`
    res.innerHTML += `${mm} milímetros (mm)`

}