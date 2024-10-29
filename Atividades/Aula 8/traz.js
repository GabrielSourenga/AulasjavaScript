const calcularImc = () => {
    let altura = Number(document.querySelector('#nAltura').value)
    let peso = Number(document.querySelector('#nPeso').value)
    let res = document.querySelector('p')

    let imc =  peso/ (altura * altura)  
    res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`
}


