let numbers = [1, 2, 3, 4, 5]

let pares = numbers.filter((numbers) => {
    return numbers % 2 === 0
})

console.log(`${pares}`);