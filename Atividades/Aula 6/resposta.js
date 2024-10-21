let tituloX = document.getElementById('titulo');
tituloX.style.color = 'brown';
tituloX.style.textAlign = 'center';
tituloX.style.fontFamily = 'cursive';

let um = document.getElementById('primeiro');
um.innerHTML = 'Gabriel Alvarenga'

let grupo = document.getElementsByClassName('texto')
for (let t = 0; t < grupo.length; t++){
    grupo[t].style.color = 'darkGreen'
    grupo[t].style.fontFamily = 'cursive'
    grupo[t].style.textAlign = 'center'
}
