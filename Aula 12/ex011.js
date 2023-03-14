var idade = 67
if (idade < 16) {
    console.log(`Não Vota, você tem apenas ${idade} anos`)
}
else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional, você tem ${idade} anos`)
}
else if (idade >= 18){
    console.log(`Voto é obrigatório, você tem ${idade} anos`)
}