# CNAB Kenzie Parser

Aplicação web que insere no banco e lista os dados CNAB do arquivo selecionado pelo usuário de forma organizada e legível.

## Começando

Clone esse repositório para sua máquina: `git clone https://github.com/Hyaguinhogp/m6-s2-backend-challenge.git`

### Pré-requisitos

A única coisa que precisa para rodar a aplicação é ter o docker instalado na sua máquina, segue a documentação: https://docs.docker.com/desktop.

### Configurando variáveis de ambiente

Na raiz do repositório terá o arquivo `.env.example`:

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

Estas serão as configurações do banco de dados, você irá preencher com os dados de acesso que desejar, por exemplo:

```
POSTGRES_USER=joao
POSTGRES_PASSWORD=1234
POSTGRES_DB=joaodb
```

Feito isso basta renomear o arquivo para `.env`

## Executando

Abra um terminal no diretório do repositório e execute:

```
docker compose build
docker compose up
```

## Utilizando

Espere o docker fazer a build e executar a aplicação, após isso no seu navegador acesse `http://localhost:3000/home`, 
clique no ícone e selecione um arquivo txt contendo os dados no formato CNAB, após isso a aplicação vai organizar os 
dados por loja, mostrar o tipo de transação e o total.


### Acessando o banco

Basta utilizar as informações passadas no `.env` no seu gerenciador de banco de dados na porta 5434.

## Tecnologias utilizadas

* [ReactJs](https://reactjs.org/)
* [DJango](https://docs.djangoproject.com/en/4.1/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)

