var array = [1,5,7]
array.push = 9 //o 'push' sempre adiciona na ultima casa
array.length // o 'lenght' mostra quanto elementos ele possui

/*

for(var c = 0; c <= array.lenght; c++){
    console.log(array[c])
}

*/

for(var c in array){   // escrever posições de elementos
    console.log(array[c])
}

console.log(`O valor 5 se encontra na posição ${array.indexOf(5)+1}`)  // serve para descobrir a posição do elemento

/*
FUNÇÃO

- São ações executadas assim que são chamadas ou em decorrência de algum evento

- Uma função pode receber parâmetros e retornar um resultado


Chamada -> parâmetro -> ação -> retorno


*/