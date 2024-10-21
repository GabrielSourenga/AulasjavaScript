// window.alert(`Bem-Vindo`);
// let nome = window.prompt(`Qual é o seu nome?`);
// window.confirm(`${nome} realmente é seu nome`)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let nome = window.prompt(`Qual é o seu nome?`);
// window.document.body.innerText = nome;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tituloPri = document.getElementById('elementoH1');
tituloPri.innerHTML = "Questionário";
tituloPri.style.color = 'red';
let nome = document.getElementById('nome').value;

nome.addEventListener('input', function() { 
    const valor = nome.value; 
    console.log(valor);});

    function obterValor() {
        var valor = document.getElementById("nome").value;
        console.log("O valor do input é: " + valor);
    }
