let email = ['ovelhadepudim@gmail.com', 'furaomutosso@gmail.com', 'gvendolivros@gmail.com']

//Nome/Método/Função
email.forEach((email, index, array)=>{
    console.log(`E-mail enviado para ${email}`)
    console.log(`Seu cadastro é ${index}`)
    console.log(`E-mail da Lista: ${array}`)
    console.log(`=========================================================================================`);
})

//               email(Nesse caso)        index               Array
// Elementos da função = elemento | Valor começa do'0' | Array completo