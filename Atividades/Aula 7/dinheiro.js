function calculoEuro(){
    let real = parseFloat(prompt(`Qual valor em reais você quer fazer a conversão?`))
    let euro = 6.15
    let valor = real / euro

    return `= ${valor.toFixed(2)} euros`
}
    alert(calculoEuro())



























