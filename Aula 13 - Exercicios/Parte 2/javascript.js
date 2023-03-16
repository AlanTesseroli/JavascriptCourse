function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    
    
    if (fano.value.length == 0 || fano.value > 'txtano'){
        window.alert('ERRO, tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        if (fsex[0].checked){
            //Masculino
            genero = 'Homem'
                if (idade < 10){
                    //Criança
                    img.setAttribute('src', 'homcri.jpg')
                }
                else if( idade <21){
                    //Jovem
                    img.setAttribute('src', 'homjov.jpg')
                }

                else if(idade <50){
                    //Adulto
                    img.setAttribute('src', 'hommed.jpg')
                }

                else{
                    //Idoso
                    img.setAttribute('src', 'homido.jpg')
                }

        }

        else if(fsex[1].checked){
        //Feminino
           genero = 'Mulher'
            if (idade < 10){
                    //Criança
                    img.setAttribute('src', 'mulcri.jpg')
                }
                else if( idade <21){
                    //Jovem
                    img.setAttribute('src', 'muljov.jpg')
                }

                else if(idade <50){
                    //Adulto
                    img.setAttribute('src', 'mulmei.jpg')
                }

                else{
                    //Idoso
                    img.setAttribute('src', 'mulido.jpg')
                }

            
            }

        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)

}