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

## Map, Filter e Reduce

### Map

Função que cria um novo array e realiza operações indicadas em uma função em ordem crescente.

#### Estrutura

array.map(função callback a ser executada, apontar um valor na função);

#### Diferença para o forEach

O forEach não cria um array secundário e precisa de uma variável para alocar seu resultado.

### Filter

Cria um novo array que filtra o conteúdo de acordo com a função.

#### Estrutura

array.filter(função callback a ser executada, apontar um valor na função);

### Reduce

Executa uma função em todos os elementos de um array e retorna apenas um valor.

#### Estrutura

array.reduce(função callback a ser executada a partir do acumulador, valor que o retorno irá atuar)

const callbackFn = function(accumulator, currentValue, index, array){}

## DOM

### O que é?

Document Object Model é um modelo padrão de acesso e modifição dos elementos HTML.

#### BOM

Browser Object Model é o modelo padrão de acesso e modificação da janela de páginas WEB, onde o DOM está incluido.

### Selecionando elementos HTML

Utiliza-se a palavra document seguida do tipo de elemento que se deseja selecionar e seu nome de marcação, como:

- getElementById();
- getElementByTagName();
- getElementByClassName();
- querySelectorAll();

### Adicionar e deletar elementos HTML

Utiliza-se a palavra document seguida de:

- createElement(element);
- removeChild(element);
- appendChild(element);
- replaceChild(element);

### Adicionar e remover classes ao elemento

Para utilizar essa opção primeiro é necessário adicionar ao JS uma variavel que aponta para o elemento que deseja ser personalizado.

- elemento.classList.add("nome-classe");
- elemento.classList.remove("nome-classe");
- elemento.classList.toggle("nome-classe");

### Adicionar e remover elementos ao CSS

Utiliza-se a palavra document seguida de um selecionador de elemento HTML:

- document.getElementsByTagName("p").style.color = "orange";

### Eventos do Javascript

- mouseover e mouseout
- click e dbclick
- change e load

#### Função Event listener

Cria um evento acionado após determinada ação.

- elemento.addEventListener("tipo evento", função);

