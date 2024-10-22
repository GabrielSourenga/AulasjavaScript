let titulo = document.querySelector('#tituloPri');
titulo.style.color = 'orange'
titulo.style.fontFamily = 'cursive'

let paragra = document.querySelector('.texto')
paragra.style.color = 'pink'
paragra.style.fontFamily = 'cursive'

// let texto = document.querySelector('p')
// let unico = document.querySelector('p.exemplo')

let lista = document.querySelectorAll('li')
for (let i = 0; i < lista.length; i++){
    lista[i].style.backgroundColor = 'black'
    lista[1].style.backgroundColor = 'grey'
    lista[i].style.color = 'white'
}

document.body.style.backgroundColor = 'brown'