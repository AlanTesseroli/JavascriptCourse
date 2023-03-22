
const lista = []








function tabuada(){
    var ini = document.getElementById('txtini')
    var select = document.getElementById('tabu')   
    var res = document.querySelector('div#res')
    var fim = document.getElementById('fim')


    var num = Number(ini.value)


            if(num <= 100 && num > 0){
                
                res.innerHTML = 'Preencha os dados para ver o resultado'
                var opcao = document.createElement('option')
                opcao.text = `Valor ${num} adicionado`
                select.appendChild(opcao)

                lista.push(num)


                
                document.getElementById('fim').onclick = function(){

                    const max = Math.max(...lista)
                    const min = Math.min(...lista)

                    function somatotal(lista){
                        var soma = 0

                        for(var count = 0; count < lista.length; count += 1){
                            soma += lista[count]

                        }
                        return soma
                    }

                    res.innerHTML = ''
                    res.innerHTML += `Ao todo, temos ${lista.length} números`
                    res.innerHTML += `O maior valor foi ${max}`
                    res.innerHTML += `O menor valor foi ${min}`
                    res.innerHTML += `Somando os valores temos ${somatotal(lista)}`
                    res.innerHTML += `A média dos valores digitados é  ${somatotal(lista)/lista.length}`
                }


            }

            else{
                window.alert('Tente novamente')
            }

    

}

document.getElementById('fim').onclick = function(){ 
    if(lista.length==0){
        window.alert('Tente novamente')
    }
    
    else{

    }

}



function reiniciar(){
    window.location.reload()
}