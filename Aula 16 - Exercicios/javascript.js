
const lista = []

function tabuada(){
    var ini = document.getElementById('txtini')
    var select = document.getElementById('tabu')   
    var res = document.querySelector('div#res')
    var fim = document.getElementById('fim')


    var num = Number(ini.value)
    var c = 0


            if(num <= 100 && num > 0){
                
                var opcao = document.createElement('option')
                opcao.text = `Valor ${num} adicionado`
                select.appendChild(opcao)

                lista.push(num)

                document.getElementById('fim').onclick = function(){
                    res.innerHTML += `Ao todo, temos ${lista.length} números` 
                    res.innerHTML += `O maior valor foi `
                    res.innerHTML += `O menor valor foi `
                    res.innerHTML += `Somando os valores temos `
                    res.innerHTML += `A média dos valores digitados é  `
                }



            }

            else{
                window.alert('Tente novamente')
            }

    

}


function reiniciar(){
    window.location.reload()
}