alert(`vamos fazer contas? `)
alert(`Primeiro me de os numeros`)
let valor1 = Number(prompt(`Me dê o primeiro número`))
let valor2 = Number(prompt(`Me dê o segundo número`))
let simbolo = Number(prompt(`Como você quer calcular? Adição = 1, Subtração = 2, Multiplicação = 3 0u Divição = 4`))
// Adição - 1
// Subtração - 2
// Multiplicação - 3
// Divisão - 4

switch (simbolo) {
    case 1:
        let res1 = valor1 + valor2
        alert(`Seu resultado foi ${res1}`)
        break;

    case 2:
        let res2 = valor1 - valor2
        alert(`Seu resultado foi ${res2}`)
        break;

    case 3:
        let res3 = valor1 * valor2
        alert(`Seu resultado foi ${res3}`)
        break;

    case 4:
        let res4 = valor1 / valor2
        alert(`Seu resultado foi ${res4}`)
        break;

    default:
        break;
}