# CNAB Parser
Aplicação web que insere no banco e lista os dados CNAB do arquivo selecionado pelo usuário
<details><summary><b>Tecnologias utilizadas:</b></summary>
  <ul>
    <li>Django</li>
    <li>React</li>
    <li>Postgresql</li>
    <li>Docker</li>
  </ul>
</details>

## Requisitos:
<ul>
  <li>Docker instalado na máquina</li>
</ul>

## Instalação:
<ol>
  <li>Clone este repositório na sua máquina local: git clone https://github.com/Hyaguinhogp/m6-s2-backend-challenge.git</li>
  <li>Prepare o arquivo das environments: Crie um arquivo   `.env`   na raiz do repositório e copie o conteúdo do arquivo `.env.example` para ele</li>
  <li>Insira as informações do banco de dados: escolha o nome, senha e nome do banco que desejar</li>
</ol>

## Execução:
<ul>
  <li>Execute o docker compose: `docker compose up`</li>
</ul>

## Uso:
<ol>
  <li>Clique no ícone e esolha o arquivo com os dados CNAB</li>
  <li>
    Acesse o banco de dados com os dados configurados(nome, senha e nome do banco) na porta `5434` e verifique se há uma table transactions com os dados do arquivo
  </li>
</ol>

