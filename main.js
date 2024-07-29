// NULLISH COALESCING OPERATOR

// O problema é que o || considera o 0 como false, sendo que ele seria válido para a situação
// const idade = 0
// document.body.innerText = 'Sua idade é ' + (idade || 'Não informado')

// Com o ?? é mais restritivo
// Só considera inválido o “null” e “undefined”
// document.body.innerText = 'Sua idade é ' + (idade ?? 'Não informado')

// OBJETOS
// const user = {
//     name: 'Diego',
//     nickname: 'Valdinho',
//     idade: 22,
//     address: {
//         street: 'Rua Teste',
//         number: 278,
//     },
// }

// document.body.innerText = ('name' in user)
// document.body.innerText = Object.keys(user)
// document.body.innerText = Object.values(user) // Não funciona com objeto dentro de objeto
// document.body.innerText = JSON.stringify(Object.values(user))
// document.body.innerText = JSON.stringify(Object.entries(user))

// DESESTRUTURAÇÃO
// Separa parte de um objeto para uma variável
// Forma comum:
// const address = user.address
// document.body.innerText = JSON.stringify(address)
// Desestruturação:
// const { address } = user
// document.body.innerText = JSON.stringify(address)

// const { address, idade: age, nickname = 'Silvinha' } = user
// document.body.innerText = JSON.stringify({ address, age, nickname })

// function printAge(user) {
//     return user.idade
// }

// document.body.innerText = printAge(user)

// Desestruturando:
// function printAge({ idade }) {
//     return idade
// }

// document.body.innerText = printAge(user)

// REST OPERATOR
// Para obter as propriedades restantes do objeto, retirando apenas a(s) propriedade(s) já citada(s)
// const { name, idade, ...rest } = user

// document.body.innerText = JSON.stringify(rest)

// const array = [1, 2, 3, 4, 5]
// const [first, second, ...rest] = array

// document.body.innerText = JSON.stringify({ first, second, rest })

// Pulando o segundo:
// const [first, , third, ...rest] = array

// document.body.innerText = JSON.stringify({ first, third, rest })

// SHORT SINTAX
// Quando o nome da variável e o valor do objeto se repetem, basta colocá-lo 1 vez

// const name = 'Wallison'
// const age = 20

// Antes:
// const user = {
//     name: name,
//     age: age,
// }

// Forma com short sintax:
// const user = {
//     name,
//     age
// }

// document.body.innerText = JSON.stringify(user)

// OPTIONAL CHAINING
const user = {
    name: 'Diego',
    age: 22,
    address: {
        street: 'Rua Teste',
        number: 278,
        zip: {
            code: '59300000',
            city: 'Caicó'
        }
    },
}

document.body.innerText = user.address.street