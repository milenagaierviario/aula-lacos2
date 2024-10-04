/*

1.  
Nesse código ele vai definir que irão ter 5 rodadas e que elas vão cessar no número sendo menor que 5. Portanto o resultado impresso no console da soma irá ser 10.

2. vai ser impresso os valores maiores que 18 da lista que serão 19, 21, 23, 25, 27 e 30. Caso tenha que mostrar o índice de cada elemento só o for of é necessário, usaria dentro do for uma variável que procure dentro da constante os índices da array.

3. No meu entendimento seria 4, pois multiplica o resultado 1 com o 4 escrito pelo usuário.

*/


let bichos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let nome = []

if ( bichos === 0 ) {
 console.log("Que pena! Você pode adotar um pet!") 
} else {
    
    for(let i = 0 ; i < bichos ; i++) {
        let nomes = prompt("Qual/Quais são os nomes deles?")
        nome.push(nomes)
    }
    }

    for(let i = 0 ; i < nome.length ; i++) { 
        console.log(nome[i])
    }
   

    let arrayOriginal = [1 , 3 , 5 , 7 , 13]
    let numeros = [] 

    function impri(array) {
        for(let i = 0 ; i < arrayOriginal.length ; i++) {
           console.log(arrayOriginal[i])
        }
    }
