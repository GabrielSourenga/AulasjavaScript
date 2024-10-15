let preco = 180
let des = prompt(`Por favor, coloque o cupom de desconto! (DESC1, DESC2, DESC3, DESC4, DESC5)`)

switch (des) {

    case 'DESC1':

        let novo1 = (preco * 5 ) / 100 ;
        let novoPreco1 = preco - novo1
        alert(`O preço era ${preco}`);
        alert(`Com o desconto de 5% ficou ${novoPreco1}`);

        break;

    case 'DESC2':
        let novo2 = (preco * 10) / 100 ;
        let novoPreco2 = preco - novo2
        alert(`O preço era ${preco}`);
        alert(`Com o desconto de 10% ficou ${novoPreco2}`);
        break;

    case 'DESC3':
        let novo3 = (preco * 15) / 100 ;
        let novoPreco3 = preco - novo3
        alert(`O preço era ${preco}`);
        alert(`Com o desconto de 15% ficou ${novoPreco3}`);
        break;

    case 'DESC4':
        let novo4 = (preco * 20) / 100;
        let novoPreco4 = preco - novo4
        alert(`O preço era ${preco}`);
        alert(`Com o desconto de 20% ficou ${novoPreco4}`);
        break;

    case 'DESC5':
        let novo5 = (preco * 25) / 100;
        let novoPreco5 = preco - novo5
        alert(`O preço era ${preco}`);
        alert(`Com o desconto de 25% ficou ${novoPreco5}`);
        break;

    default: 
    alert(`Cupom invalido!`)
        break;
}