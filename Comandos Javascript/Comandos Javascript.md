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

### Estrutura

const myMap = new Map();

### Características

- myMap.set('chave', 'valor');
- myMap.get(chave);
- myMap.delete('valor');

- Pode ser iterado por loop for...of.
- Possui a propriedade lenght.
(Mais fáceis de iterar que Objeto)

## Set

Coleção que armazena valores únicos.

### Estrutura

const mySet = new Set();

### Características

- mySet.add(valor);
- mySet.has(valor); //Checa se um valor está presente no Set.
- mySet.delete(valor);

- Possui a propriedade size em vez de lenght.
- Não possui os métodos map, filter, reduce, etc.

## Debugging e Error Handling

- throw: Caso o código um comando não seja concluído lança uma resposta para o console como um erro.

- try: Executa uma função ou comando.

- catch (e): Caso uma função try contenha um erro, este erro será capturado.

- finally: Executa depois das verificações por erros, independentemente se ocorreu um erro ou não.

- Objeto Error: new Error(message, filename, linenumber)  Declara um novo erro.
     errorName.name    Cria um nome para o erro.

## Javascript Assíncrono

### Promises: 

Realiza uma promessa para ser resolvida no futuro.

- Estrutura

const myPromise = new Promise((resolve, reject)=>{
window.setTimeout(() => {
  resolve(console.log('Resolvida!'));
}, 2000);
});

- async: Determina uma função como assíncrona.

- await: Para o código e aguarda a resolução de uma promessa.

## API

Realiza o intermédio dos dados entre servidores, sendo enviada em JSON.

- Sintaxe:

fetch(url, options)     // Retorna uma promise
.then (response => response.json())

- Operações

GET: Pega dados da API.
POST: Envia dados para API.
DELETE: Deleta dados da API.
PUT:

## Orientação a objetos

### Pilares:

- Abstração: Generalização e simplificar um conceito

- Herança: Herdar propriedades e métodos dos objetos pais.

- Encapsulamento: Cada classe é independente do restante do código.

- Polimorfismo: Possuem a mesma classe pai, porém tem métodos diferentes.

### Protótipos 

Todos os objetos possuem métodos ou propriedade herdados do protótipo. Quando chamamos a propriedade de um objeto, está propriedade será buscada primeiro no próprio objeto, em seguida no protótipo do objeto e por fim no protótipo do protótipo, caso nada seja encontrado o programa retorna null.

##### Shadowing properties

Ocorre quando se nomeia uma propriedade do objeto com o mesmo nome de uma propriedade do protótipo do objeto ou do protótipo do protótipo do objeto. Assim pela ordem de checagem do protótipo, a nova propriedade será a retornada.

### Classes

- Sempre possuem um construtor, getters e setters. 
- Constructor: 
- Método super().
- Método específico.
