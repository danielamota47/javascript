var agora = new Date()
var diaSem = agora.getDay()
/* 
    Domingo 0
    Segunda 1
    Terça 2
    Quarta 3
    Quinta 4  
    Sexta 5
    Sábado 6
*/

switch (diaSem) {
    case 0 : 
        console.log (`O dia da semana hoje é Domingo`)
        break

    case 1 : 
        console.log (`O dia da semana hoje é Segunda`)
        break

    case 2: 
        console.log (`O dia da semana hoje é Terça`)
        break

    case 3:
        console.log (`O dia da semana hoje é Quarta`)
        break

    case 4:
        console.log (`O dia da semana hoje é Quinta`)
        break

    case 5:
        console.log (`O dia da semana hoje é Sexta`)
        break

    case 6:
        console.log (`O dia da semana hoje é Sábado`)
        break

    default:
        console.log("Estás noutra realidade?")
        break

}