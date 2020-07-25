console.log("Hello Reprograma");

var entrada = document.querySelector("input")
console.log("Entrada: ", entrada)

var saida = document.querySelector("#respostaAno")
console.log("Saída: ", saida)

function cliquei(){
    var ano = entrada.value
    saida.textContent = ano
    console.log(ano)
}
