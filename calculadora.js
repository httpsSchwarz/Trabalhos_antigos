function soma(){
    let num1, num2, n1, n2, resposta, valorResposta 

   num1 = document.getElementById('numero1')
   console.log(num1)

   num2 = document.getElementById('numero2')
   console.log(num2)

   n1 = Number(num1.value)
   console.log(n1)

   n2 = Number(num2.value)
   console.log(n2)

    resposta = n1 + n2
    console.log(resposta)

    valorResposta = document.getElementsByTagName('h2')[0]
    console.log(valorResposta)

    valorResposta.innerText = resposta
    console.log(valorReposta)
}

function subtracao(){
    let num1, num2, n1, n2, resposta, valorResposta 

   num1 = document.getElementById('numero1')
   console.log(num1)

   num2 = document.getElementById('numero2')
   console.log(num2)

   n1 = Number(num1.value)
   console.log(n1)

   n2 = Number(num2.value)
   console.log(n2)

    resposta = n1 - n2
    console.log(resposta)

    valorResposta = document.getElementsByTagName('h2')[0]
    console.log(valorResposta)

    valorResposta.innerText = resposta
    console.log(valorReposta)
}

function multiplicacao(){
    let num1, num2, n1, n2, resposta, valorResposta 

   num1 = document.getElementById('numero1')
   console.log(num1)

   num2 = document.getElementById('numero2')
   console.log(num2)

   n1 = Number(num1.value)
   console.log(n1)

   n2 = Number(num2.value)
   console.log(n2)

    resposta = n1 * n2
    console.log(resposta)

    valorResposta = document.getElementsByTagName('h2')[0]
    console.log(valorResposta)

    valorResposta.innerText = resposta
    console.log(valorReposta)
}
function divisao(){
    let num1, num2, n1, n2, resposta, valorResposta 

   num1 = document.getElementById('numero1')
   console.log(num1)

   num2 = document.getElementById('numero2')
   console.log(num2)

   n1 = Number(num1.value)
   console.log(n1)

   n2 = Number(num2.value)
   console.log(n2)

    resposta = n1 / n2
    console.log(resposta)

    valorResposta = document.getElementsByTagName('h2')[0]
    console.log(valorResposta)

    valorResposta.innerText = resposta
    console.log(valorReposta)
}