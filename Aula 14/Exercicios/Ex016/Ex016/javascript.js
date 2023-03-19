function verificar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.querySelector('div#res')
    
    var inicial = Number(ini.value)
    var final = Number(fim.value)
    var passo = Number(pas.value)

    if (passo <= 0){
        window.alert('TENTE NOVAMENTE')
    }

    else 
        if (inicial < final){
                for (var a = inicial; a < final; a += passo){
                    res.innerHTML += `${a} -> `
                }
            }

        else{
            for (var a = inicial; a > final; a -= passo){
                res.innerHTML += `${a} -> `
        }
    }

    res.innerHTML += 'FIM' 
}

function reiniciar(){
    window.location.reload()
}