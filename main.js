// NULLISH COALESCING OPERATOR ----------

// A diferença para um "if" (ou "?:"") é que o "if" testa diversas condições, enquanto este testa apenas se é "null" ou "undefined"

// O problema é que o || considera o 0 como false, sendo que ele seria válido para a situação
// const idade = 0
// document.body.innerText = 'Sua idade é ' + (idade || 'Não informado')

// Com o ?? é mais restritivo
// Só considera inválido o “null” e “undefined”
// document.body.innerText = 'Sua idade é ' + (idade ?? 'Não informado')

// OBJETOS ----------
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

// DESESTRUTURAÇÃO ----------
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

// REST OPERATOR ----------
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

// OPTIONAL CHAINING ----------
// Para lidar com objetos nulos ou inexistentes
// const user = {
//     name: 'Diego',
//     age: 22,
//     address: {
//         street: 'Rua Teste',
//         number: 278,
//         zip: {
//             code: '59300-000',
//             city: 'Caicó'
//         },
//         showFullAddress() {
//             return 'ok'
//         }
//     },
// }
// . para acessar a propriedade do objeto
// document.body.innerText = user.address.zip.code

// Forma menos prática de verificar a existência
// document.body.innerText = user.address
//     ? user.address.zip
//         ? user.address.zip.code
//             ? user.address.zip.code
//             : "Sem informações do CEP"
//         : "Sem informações da cidade"
//     : "Sem informações do endereço"

// Forma prática
// ?. para testar a existência da propriedade anterior antes de acessar a seguinte, retornando "undefined" ou o que eu colocar como valor padrão
// document.body.innerText = user.address?.zip?.code ?? "Não informado"

// Para funções
// document.body.innerText = user.address?.showFullAddress?.()

// Acessar propriedades de forma prática
// Não dá erro, também mostra o "undefined"
// const key = 'street'
// document.body.innerText = user.address[key]

// MÉTODOS DE ARRAY ----------
// Para percorrer arrays
// map, filter, every, some, find, findIndex, reduce
// const array = [1, 2, 3, 4, 5]

// for (const i of array) {
//     document.body.innerText += i
// }

// array.forEach(i => {
//     document.body.innerText += i
// })

// MAP
// Semelhante ao "forEach", porém com o "map" é possível fazer um retorno de forma mais prática, dentro do próprio método
// Com ele não há filtros ou exclusões, sempre vai ter o mesmo tamanho do vetor original

// => sintaxe curta de uma função, em que "item" seria o nome da função e retornando os valores dentro de {}

// const newArray = array.map(item => {
//     return item * 2
// })

// const newArray = array.map(item => {
//     if (item % 2 == 0) { // Se for par
//         return item * 10
//     } else {
//         return item
//     }
// })

// document.body.innerText = JSON.stringify(newArray)

// FILTER
// Não modifica os valores, apenas pega uma parte deles; filtra

// const newArray = array.filter(item => item % 2 !== 0)

// const newArray = array
//     .filter(item => item % 2 !== 0)
//     .map(item => item *10)

// document.body.innerText = JSON.stringify(newArray)

// EVERY
// Retorna valor booleano (true ou false) caso todos os itens satisfaçam a condição

// const allItemsAreNumbers = array.every(item => typeof item == 'number')
// document.body.innerText = JSON.stringify(allItemsAreNumbers)


// SOME
// Testa se pelo menos um item satisfaz a condição

// const allItemsAreNumbers = array.some(item => typeof item !== 'number')
// document.body.innerText = JSON.stringify(allItemsAreNumbers)

// FIND
// Para encontrar o primeiro item do array que satisfaça a condição

// const findOddNumber = array.find(item => item % 2 == 0)
// document.body.innerText = JSON.stringify(findOddNumber)

// FINDINDEX
// O mesmo que "find", porém retorna o índice ao invés do valor

// const findIndexOddNumber = array.findIndex(item => item % 2 == 0)
// document.body.innerText = JSON.stringify(findIndexOddNumber)

// REDUCE
// Para reduzir o objeto a algo

// const soma = array.reduce((acc, item) => {
//     document.body.innerText += `${acc} , ${item} ---`
//     return acc + item
// }, 0)

// document.body.innerText += JSON.stringify(soma)

// TEMPLATE LITERALS ----------

// const user = 'Wallison'
// const message = 'Bem vindo, ' + user + '!'
// Forma mais prática abaixo, com interpolação de strings
// const message = `Bem-vindo, ${user}!`

// const user = ''
// const message = `Bem vindo, ${user ? user : "visitante"}!` // Com o if é desnecessariamente maior
// const message = `Bem vindo, ${user ?? "visitante"}!`
// const message = `Bem vindo, ${user || "visitante"}!` // Melhor uso, já que 0 e '' não são considerados nele


// document.body.innerText = message


// PROMISES
// Torna coisas assíncronas (em segundo plano) para não atrasar o restante do código
// .then ou .catch, mas também posso criá-las

// const soma = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b)
//         }, 2000)
//     })
// } // return e {} opcionais por ser apenas 1 sentença

// soma(1, 6)
//     .then(soma => {
//         document.body.innerText = soma
//     })
//     .catch(err => {
//         console.log(err)
//     })


// fetch('https://api.github.com/users/diego3g')
//     .then(response => {
//         return response.json()
//     })
//     .then(body => {
//         console.log(body)
//     })
//     // .then(response => {
//     //     response.text().then(body => {
//     //         console.log(body)
//     //     })
//     // })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log('Deu certo')
//     })

// async function fetchDataGitHub() {
//     try {
//         const response = await fetch('https://api.github.com/users/diego3g') // await para aguardar essa promise ser finalizada
//         const body = await response.json()
    
//         console.log(body)
//     } catch(err) {
//         console.log(err)
//     } finally {
//         console.log('OK')
//     }
// }

// fetchDataGitHub()

// Named Export
// Nomes iguais da importação e exportação

// import { soma, sub, PI } from './lib/math.js'

// console.log(soma(1, 4))
// console.log(sub(1, 4))
// console.log(PI)

// Default
// Apenas no caso de ter só 1 propriedade
// (Melhor sempre a forma anterior)
// import soma from './lib/sum.js'

// console.log(soma(5, 10))

// Importar tudo de uma vez
// import * as math from './lib/math.js'

// console.log(math.soma(1, 10))

// Importar renomeando
// import { soma as sum } from './lib/math.js'
// console.log(sum(1,2))

// Importando e exportando ao mesmo tempo
export { soma } from './lib/math'