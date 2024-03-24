var horas = 5
console.log(`São ${horas}h`)
if (horas > 4 && horas <= 12) {
    console.log("Bom dia!")
} else if (horas > 12 && horas <= 19 ) {
    console.log("Boa tarde!")
} else if (horas > 19) {
    console.log("Boa noite")
} else {
    console.log("Boa madrugada!")
}