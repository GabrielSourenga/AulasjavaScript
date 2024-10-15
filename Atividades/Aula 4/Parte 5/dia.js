let dia = Number(prompt(`Me diga um número de 1 à 7, por favor`))

switch (dia) {
    case 1:
        alert(`Segunda`)
        break;

    case 2:
        alert(`Terça`)
        break;

    case 3:
        alert(`Quarta`)
        break;

    case 4:
        alert(`Quinta`)
        break;

    case 5:
        alert(`Sexta`)
        break;

    case 6:
        alert(`Sábado`)
        break;

    case 7:
        alert(`Domingo`)
        break;

    default:
        alert(`Seu dia não foi encontrado`)
        break;
}