let nota1 = Number(prompt(`Bom dia aluno, você poderia me dizer a sua primeira nota? Por favor`))
let nota2 = Number(prompt(`Agora a segunda, por favor`))
let media = (nota1 + nota2)/ 2  >= 6 ? "Parabéns você foi aprovado, boa sorte!" : "Infelizmente você foi reprovado, sinto muito :("
alert(`${media}`)
