var inputSalario = document.querySelector('#ganho-mes')
console.log(inputSalario)

var inputHoras = document.querySelector('#horas-dia')
console.log(inputHoras)

var resultado = document.querySelector('#resposta')


function calcularValorHora() {
    var salario = inputSalario.valueAsNumber
    console.log("Salário mensal: ", salario)

    var horas = inputHoras.valueAsNumber
    console.log("Horas por dia: ", horas)

    var horasMes = horas * 22
    console.log("Total de horas por mês: ", horasMes)

    var valorHora = salario / horasMes
    console.log("Resultado: ", valorHora)

    var valorHoraDuasCasas = valorHora.toFixed(2)
    console.log("Valor formatado: ", valorHoraDuasCasas)

    resultado.textContent = "R$ " + valorHoraDuasCasas
    
}