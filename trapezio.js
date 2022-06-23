function clicar(){
    let num1, num2, n1, n2, resposta, valorResposta 

   num1 = document.getElementById('BaseMenor')
   console.log(num1)

   num2 = document.getElementById('BaseMaior')
   console.log(num2)

   num3 = document.getElementById('Altura')
   console.log(num3)

   n1 = Number(num1.value)
   console.log(n1)

   n2 = Number(num2.value)
   console.log(n2)

   n3 = Number(num3.value)
   console.log(n3)

    resposta = ((n1 + n2) * n3) / 2
    console.log(resposta)

    valorResposta = document.getElementsByTagName('h2')[0]
    console.log(valorResposta)

    valorResposta.innerText = resposta
    console.log(valorReposta)
}