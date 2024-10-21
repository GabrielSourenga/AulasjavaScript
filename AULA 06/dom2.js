let tituloX = document.getElementById('elemento0');
tituloX.style.backgroundColor = 'pink';
tituloX.style.textAlign = 'center';
tituloX.style.fontFamily = 'cursive';
tituloX.style.color = 'red'
document.body.style.backgroundColor = 'lightBlue'

let titulo = document.getElementsByClassName('titulo')
for (let t = 0; t < titulo.length; t++){
    titulo[t].style.color = 'green'
    titulo[t].style.fontFamily = 'cursive'
    titulo[t].style.backgroundColor = 'lightGreen'
    titulo[t].style.textAlign = 'center';
}

let nomeTag = document.getElementsByTagName('p')
for (let v = 0; v < nomeTag.length; v++){
    nomeTag[v].style.textAlign = 'center'
    nomeTag[v].style.color = 'blue'
    nomeTag[v].style.fontFamily = 'cursive'
}