let senha = 9
let senha2 = 11

do {
    senha++
    console.log(`${senha}`); //Executou pelo menos uma vez
} while (senha <= 10);

console.log(`-----------------------`);

while (senha2 <=10) {
    senha2++
    console.log(`${senha2}`); //Não executou nenhuma vez
    
}

// while - OK
// do-while - OK
// for - OK