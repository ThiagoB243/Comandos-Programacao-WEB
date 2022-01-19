## Variáveis

var: Tem escopo global ou local, pode ser redeclarada, hoisting (variável movido para o topo do escopo).

let: Tem escopo de bloco, não pode ser redeclarada, mas pode ser atualizada, precisa ser usada depois da declaração.

const: Tem escopo de bloco, não pode ser redeclarada e não pode ser atualizada, porém as propriedades dos seus objetos podem.

## Null e Undefined

- Undefined: Resultado quando uma váriavel foi declarada, mas não recebeu valor (valor indefinido).

- Null: Valor que significa a variável está definida, mas não aponta para nenhum lugar na memória.

## Funções

- Estrutura

function nome (parametro){
  //corpo da função
}

nome(parametro);  --> Chamando a função

- Valor padrão

function padrao(valor = 2){   --> Caso nenhum outro valor for dado ao parâmetro da função, o valor 2 será adotado.
  // corpo da função
}

- Função Callback

Uma função que é usada como parâmetro para outra função.

function soma(a, b, callback){
    return callback (a+b)
}

console.log(soma(5,3, function (total){
    return total*2;
    }))

- Função Auto-invocável (IIFE)

Função que se executa sozinha.

(function auto(){
 console.log('Olá')
}())

- Função anônima

const anonima = function (){
    console.log('segredo')
}
anonima();

- Simplificação de uma função
 
let simple = () =>{
    //corpo da função
}

## Map

Coleção de arrays com valores e chaves.

# Estrutura

const myMap = new Map();

# Características

myMap.set('chave', 'valor');
myMap.get(chave);
myMap.delete('valor');

Pode ser iterado por loop for...of.
Possui a propriedade lenght.
(Mais fáceis de iterar que Objeto)

## Set

Coleção que armazena valores únicos.

# Estrutura

const mySet = new Set();

# Características

mySet.add(valor);
mySet.has(valor); //Checa se um valor está presente no Set.
mySet.delete(valor);

Possui a propriedade size em vez de lenght.
Não possui os métodos map, filter, reduce, etc.
.

