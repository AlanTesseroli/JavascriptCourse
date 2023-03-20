function tabuada(){
    var ini = document.getElementById('txtini')
    var res = document.getElementById('res')    

    var num = Number(ini.value)
    var c = 0

    while(c <= 10){
        res.innerHTML += '<br>'
        res.innerHTML += `${c} x ${num} = ${c*num}`
        c++
        
    }


}


function reiniciar(){
    window.location.reload()
}