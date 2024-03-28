
function parimp(n) {
    if(n%2 == 0) {
        return('par')
    } else {
        return('ímpar')
    }
}

let res = parimp(11)
console.log(`O número é ${res}`)



function soma(n1,n2) {
    return n1 + n2
}

let res = soma(9,7)
console.log(`A soma é ${res}`)


//caso o parâmetro necessário não for dado pela pessoa, o JS considera undefined, porém dá para ele considerar como 0 quando não dado. Assim: soma(n1=0, n2=0)


let v = function(x) {
    return 2*x
}

let res = v(2)
console.log(res)



function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat = fat * c
    } 
    return fat
}

let res = fatorial(5)
console.log(res)

//5! = 5 x 4 x 3 x 2 x 1


function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

let res = fatorial(5)
console.log(res)

// n! = n x (n-1)!
// 1!