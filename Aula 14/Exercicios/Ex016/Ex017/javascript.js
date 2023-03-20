function tabuada(){
    var ini = document.getElementById('txtini')
    var select = document.getElementById('tabu')   

    var num = Number(ini.value)
    var c = 1
    
    if(ini.value.lenght == 0){
        window.alert('Tente novamente!')
    }

    else{


        while(c <= 10){
            var opcao = document.createElement('option')
            opcao.text = `${c} x ${num} = ${c*num}`
            select.appendChild(opcao)
            //opt.innerHTML += '<br>'
            //opt.innerHTML += `${c} x ${num} = ${c*num}`
            c++
            
        }
    }

    /*
        while(c <= 10){
                res.innerHTML += '<br>'
                res.innerHTML += `${c} x ${num} = ${c*num}`
                c++
                
            }

    */
}


function reiniciar(){
    window.location.reload()
}