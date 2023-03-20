var num = 4

function parimp(num){
    if (num%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}

console.log(parimp(num))






var dobro = function(x){
    return x*2
}
console.log(dobro(2))





var n = 5
function fatorial(n){
    var fat = -1
    for(var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))


//RECURSIVIDADE

function fatorial(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(7))