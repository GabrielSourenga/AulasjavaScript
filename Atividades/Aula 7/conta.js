let altura = Number (prompt(`Olá, vamos calcular seu IMC, pode nos falar sua altura? Por favor (com o ponto)` ))
let peso = Number(prompt(`Agora nos diga seu peso, por favor`))

function calcularIMC (altura = 0, peso = 0){
    let imc = peso / (altura * altura) 
    if (imc <= 16.9 ) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está muito abaixo do peso`)
    } 
    else if (imc <= 18.4) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso`)
    } 
    else if (imc <= 24.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está no peso ideal`)
    }
    else if (imc <= 29.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está um pouco acima do peso`)
    }
    else if (imc <= 34.9) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 1`)
    }
     else if (imc <= 40) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 2`)
    }
    else {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade grau 3`)
    }

}

    calcularIMC(altura, peso)

