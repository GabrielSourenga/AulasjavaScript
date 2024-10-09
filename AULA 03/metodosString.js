let nome1, idade;
nome1 = 'Gabriel';
idade = 16;

console.log('===================================');
console.log(typeof nome1);
console.log(typeof idade);
console.log('===================================');

let res = idade >= 15 ? 'pode fazer o curso' : 'não pode fazer o curso';
// ! quebra o programa, a mensagem não é exibida

console.log(`O aluno ${nome1} ${res}`);

console.log('===================================');

/////////////////////////////////////////////////////////////////////////////////////////////////////////

let nome2 = 'Moi'
let novoNome = nome2.charAt(0)
//Mostra a proxima letra, Ex: 1 inves de mostrar o M vai mostrar o O

console.log(nome2);
console.log(novoNome);
console.log(nome.length);

console.log('===================================');

////////////////////////////////////////////////////////////////////////////////////////////////////////

let nome3 = prompt("Olá, boa tarde, como você se chama?");
let estaMatriculado = prompt(`Olá ${nome3} você está matriculado em algum curso? (sim-não) `);
let ra = estaMatriculado.toUpperCase() == "SIM" ? "Alun@ possui R.A." : "Alun@ não possui R.A.";

// ra.toLocaleLowerCase()
// ra.toLocaleUpperCase()
// COLOCALOS NO COMPARATIVO

alert(`O ${ra}`);

console.log('===================================');

////////////////////////////////////////////////////////////////////////////////////////////////////////

let nome4 = ' Thais Raie '
let novoNome2 = nome4.replace ('Raie', 'Alvarenga')

console.log(nome4);
console.log(novoNome2);

console.log('===================================');

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let nomeTrim = nome4.trim()

console.log(nome4);
console.log(nomeTrim);