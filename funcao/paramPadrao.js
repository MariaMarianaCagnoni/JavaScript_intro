function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma())
console.log(soma(1, 5))
console.log(soma(2, 8, 9))

//segundo modelo

function soma2(a = 0, b = 0, c = 0) {
    return a + b + c
}

console.log(soma(2,3,4))