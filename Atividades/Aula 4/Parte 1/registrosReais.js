let idade = Number(prompt(`Olá, bem-vindo ao poupa tempo, você poderia me falar qual é a sua idade?`))

if (idade >= 18) {
    alert(`Vejamos... Você já é maior de idade, que legal!`);    
} else if (idade >= 60) {
    
    alert(`Olha só! Você é classificado como idoso, aproveite`);    
} else {
    alert(`Oh! Você ainda é menor de idade`);
}