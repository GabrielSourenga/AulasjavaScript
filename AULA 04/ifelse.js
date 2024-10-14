let nota1, nota2, media, faltas;

nota1 = 10
nota2 = 5
faltas = 3
media = (nota1 + nota2)/2;

if (media >= 7 && faltas <= 5 ) { 
    //True
    console.log(`Parabéns, você foi aprovado com a media ${media} e quantidade de faltas ${faltas} :)`);  
} else {
    //False
    console.log(`Que pena, você foi reprovado com a media ${media} e quantidade de faltas ${faltas} :(`);
}
console.log(`Fim.`);

//if -- OK
//if-else -- OK
//else-if -- OK
//switch -- OK 