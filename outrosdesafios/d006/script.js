function converter(){
    let tem = window.prompt(`Digite uma temperatura em ºC (Celsius)`)
    let res = window.document.querySelector('div#res')

    let kel = Number.parseFloat(tem) + 273.15
    let fah = (Number.parseFloat(tem) * 1.8) + 32

    res.innerHTML += `<h2>A temperatura de ${tem}ºC corresponde a...</h2>`
    res.innerHTML += `${kel}K (Kelvin) <br>`
    res.innerHTML += `${fah}F (Fahrenheit)`
}