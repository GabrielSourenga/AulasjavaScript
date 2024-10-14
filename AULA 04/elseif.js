let nota1, nota2, media, faltas;

nota1 = 6.8;
nota2 = 6.8;
faltas = 3;
media = (nota1 + nota2)/2;

if (media >= 7 && faltas < 6 ) {

    console.log(`Parabéns, você foi aprovado com a media ${media} e quantidade de faltas ${faltas} :)`);  
} 
else if (media >= 6.5 && faltas <= 5 ) {

    console.log(`Foi por pouco, mas você foi aprovado pelo conselho com a media ${media} e quantidade de faltas ${faltas} :|`);
}
else {

    console.log(`Que pena, você foi reprovado com a media ${media} e quantidade de faltas ${faltas} :(`);
}

//if -- OK
//if-else -- OK
//else-if -- OK
//switch -- OK