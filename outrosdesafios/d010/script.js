function calcular(){
    let a = window.prompt(`Qual é o valor de a?`)
    let b = window.prompt(`Qual é o valor de b?`)
    let c = window.prompt(`Qual é o valor de c?`)
    let res = window.document.getElementById('res')
    let equ = `${a}x² + ${b}x + ${c} = 0`
    let sol1 = (-Number(b) + (Number(b)**2 - 4 * Number(a) * Number(c))**0.5)/ (2 * Number(a))
    let sol2 = (-Number(b) - (Number(b)**2 - 4 * Number(a) * Number(c))**0.5)/ (2 * Number(a))


    res.innerHTML += `<h2>Resolver Bhaskara</h2>`
    res.innerHTML += `A equação é ${equ} <br>`
    if(sol1 == sol2) {
        res.innerHTML += `A solução é ${Number(sol1)} (X2)`
    } else {
        res.innerHTML += `A solução é ${Number(sol1)} ou ${Number(sol2)}`
    }
    

}
