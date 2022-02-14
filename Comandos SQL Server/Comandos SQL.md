# Comandos SQL Server

- create database (nome)

- create table (nome){
    coluna1 (tipo de dado) (se aceita ou não nulos),
    coluna2 (tipo de dado) (se aceita ou não nulos)
   }

- use (nome da base de dados)

- select (colunas) from (nome da tabela)

*todas as colunas
"O nome da tabela + Alt + F1 abre mais opções de vizualização"

- insert into (nome da tabela) ((coluna1, coluna2)) ((valorc1, valorc2));

- insert into (nome da tabela) ((valorc1, valorc2)); // Desse modo se considera que os valores estão na mesma ordem das colunas//

- select (colunas) where (coluna) = (x) "Seleciona algo quando o valor for igual a x"

- update (coluna) set (parametro) = (valor) "Muda o valor para todos os parametros"

- update (coluna) set (parametro) = (valor) where (parametro) = valor "Muda o valor para um parametro específico"

- delete

- AND e OR podem ser usados para fazer comparações.

#### Tipos de dados

- int: Número inteiro
- bigint: Número inteiro grande
- float: Número inteiro ou decimal

- varchar(tamanho): Guarda caractéres alfanuméricos.
- char(tamanho): Guarda caractéres alfanuméricos, porém também guarda o número de espaços não utilizados.

## Chaves Primárias e Estrangeiras

- Uma chave Primária é um valor que indica as informações de uma coluna e não permite que existam duas chaves iguais.

- Uma chave Estrangeira indica informações de outra tabela.

## Normalização

Garante que os dados estejam organizados e armazenados nos locais corretos para evitar erros.

## Comando JOIN

