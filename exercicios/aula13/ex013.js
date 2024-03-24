var agora = new Date ()
var hora = agora.getHours()
console.log(`São exatemente ${hora} horas.`)
if (hora > 4 && hora <= 12) {
    console.log("Bom dia!")
} else if (hora > 12 && hora <= 19){
    console.log("Boa tarde!")
} else if (hora > 19) {
    console.log ("Boa noite!")
} else {
    console.log("Boa madrugada!")
}