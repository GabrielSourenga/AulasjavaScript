let nome, nota01, nota2, media, resultado;

nome = 'Thiago'; 
nota01 = 10;
nota02 = 8;
media = ((nota01 *6 /10) + (nota02 *4 /10)) 
resultado = media >= 7 ? "aprovado" : "reprovado";

// Variavel = Variavel >= X ? "1" : "2";
console.log(`Olá ${nome},você está ${resultado}, sua nota foi ${media
}`);