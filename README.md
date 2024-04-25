# API CRUD de Loja de Carros em TypeScript

Esta é uma API CRUD desenvolvida em TypeScript para gerenciar uma loja de carros.

## Instalação

Para instalar as dependências do projeto, certifique-se de ter o Node.js e o npm instalados. Em seguida, execute o seguinte comando no terminal:

```bash
npm install
````
Este comando instalará todas as dependências necessárias para executar a API.

## Funcionalidades

A API possui as seguintes funcionalidades básicas:

- **C**reate (Criar): Adicionar novos carros ao estoque da loja.
- **R**ead (Ler): Obter informações sobre os carros disponíveis.
- **U**pdate (Atualizar): Modificar detalhes dos carros existentes.
- **D**elete (Excluir): Remover carros do estoque da loja.

## Uso

Para iniciar o servidor e usar a API, execute o seguinte comando:

```bash
npm run dev
````
Isso iniciará o servidor na porta padrão 3000 (outra porta pode ser especificada no arquivo de configuração).

## Rotas

As rotas disponíveis na API incluem:

- `/cars` (GET, POST): Lista todos os carros disponíveis e adiciona novos carros.
- `/cars/:id` (GET, PUT, DELETE): Obtém, atualiza ou remove um carro específico com base no ID.

Consulte a documentação completa da API para obter detalhes sobre o uso de cada rota e os parâmetros necessários.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas encontrados.

## Autor

Julio Soares - [jjpegado](https://github.com/jjpegado)
