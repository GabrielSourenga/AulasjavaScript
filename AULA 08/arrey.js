let nomes = ['Lele', 'Sofia', 'Larissa', 'Nerissa'] //arrey
//              0       1         2          3

console.log(`===============================================`);
console.log(`${nomes[0]}`);
console.log(`${nomes[1]}`);
console.log(`${nomes[2]}`);
console.log(`${nomes[3]}`);
console.log(`===============================================`);

let metotoPop = nomes.pop()
console.log(`${nomes}`);

console.log(`===============================================`);

nomes.push('Galileu Galilei')
console.log(`${nomes}`);

console.log(`===============================================`);

let metotoShift = nomes.shift()
console.log(`${nomes}`);

console.log(`===============================================`);

nomes.unshift('Vitor Hugo')
console.log(`${nomes}`);

// pop() = Remove o ultimo elemento do arrey
// push() = Adiciona um elemento no arrey (Colocar o elemento no parametro entre "" ou uma variavel)
// shift() = Remove um elemento no primero valor do arrey
// unshift() = Adiciona um elemento no primero valor do arrey