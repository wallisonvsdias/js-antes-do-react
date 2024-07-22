// NULLISH COALESCING OPERATOR

// O problema é que o || considera o 0 como false, sendo que ele seria válido para a situação
const idade = 0
document.body.innerText = 'Sua idade é ' + (idade || 'Não informado')

// Com o ?? é mais restritivo
// Só considera inválido o “null” e “undefined”
document.body.innerText = 'Sua idade é ' + (idade ?? 'Não informado')

// OBJETOS
const user = {
    name: 'Diego',
    age: 22,
    address: {
        street: 'Rua Teste',
        number: 278,
    },
}

document.body.innerText = ('name' in user)
document.body.innerText = Object.keys(user)
document.body.innerText = Object.values(user) //Não funciona com objeto dentro de objeto
document.body.innerText = JSON.stringify(Object.values(user))
document.body.innerText = JSON.stringify(Object.entries(user))
