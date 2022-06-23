function clicar(){
    let num1, num2, n1, n2, resposta, valorResposta 

   num1 = document.getElementById('Celcius')
   console.log(num1)

   n1 = Number(num1.value)
   console.log(n1)

    resposta = (n1 * 9/5) + 32
    console.log(resposta)

    valorResposta = document.getElementsByTagName('h2')[0]
    console.log(valorResposta)

    valorResposta.innerText = resposta
    console.log(valorReposta)
}