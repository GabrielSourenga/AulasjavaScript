let nome = prompt(`Olá, bom dia, qual é o seu nome?`)
let idade = Number (prompt(`Oh, oi ${nome}, e qual é a sua idade?`))
let bairro = prompt(`${idade} que legal! E de qual bairro você é?`)
nome = nome.toUpperCase()
let valor1 = Number(prompt(`Ta certo, ${nome} você poderia me falar um número?`))
let valor2 = Number(prompt(`Agora um segundo número, por favor`))
let res = valor1 + valor2
alert(`Essa é a soma dos dois resultado ${res} :)`)