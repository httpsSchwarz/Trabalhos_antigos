function ver_idade(){
    let caixaIdade, idade, res

    caixaIdade = document.getElementById('idade')
    console.log(caixaIdade)
    idade = Number(caixaIdade.value)
    console.log(idade)
    res = document.getElementsByTagName('section')[0]

    if (idade < 16){
        res.innerHTML = '<strong> Não pode votar </strong>'
    }
    else if (idade >= 16 && idade < 18){
        res.innerHTML = '<strong> Voto Opicional </strong>'
    }
    else if (idade >= 70){
        res.innerHTML = '<strong> Voto Opicional </strong>'
    }
    else{
        res.innerHTML = '<strong> Voto Obrigatório </strong>'
    }