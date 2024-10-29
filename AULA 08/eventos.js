const mudarCor = () => {
    let elementoDiv = document.querySelector('#div1')
    elementoDiv.style.backgroundColor = 'green'
}

const tirarCor = () => {
    let elementoDiv = document.querySelector('#div1')
    elementoDiv.style.backgroundColor = 'white'
    elementoDiv.innerHTML = 'Meu nome'
}

const mudarNome = () => {
    let elementoDiv = document.querySelector('#div1')
    elementoDiv.innerHTML = 'Samuca'
}
