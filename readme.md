aula 1 . criando o servidor-> inserção do módulo de import export type module

criando rotas -> "Qual o recurso que eu quero acessar? Conunto de endereços http, rotas"
url ou rota base "/"

instalação nodemon

Aula 2
Vídeo Iniciando com Express
instalação express e refatoração de servidor

vídeo criando a rota livros
mockar uma pequena base de dados com livros e criação da rota livros;
Sugestão: inserir atividade para saber mais sobre json

vídeo criando registros com POST
criação de rota post e utilização do push para adicionar em memória

vídeo buscando e atualizando livros
O Objeto requisição (estudar)
params da rota -> estamos passando os parâmetros de busca
id é um nome que demos ao parâmetro

para saber mais -> put ou patch
Sugestão: atualização da transcrição

vídeo Deletando livros

## Aula 03 Persistindo Dados

vídeo banco de dados - teórico
vídeo criando coleção no MongoDB - prático do MongoAtlas

vídeo Conectando MongoDB e API
Refatoração de código, instalação do mongoose
Métodos de eventos on e once -> entendendo os possíveis erros de conexão.

vídeo Criando Models e Schemas
Estruturação de pasta e criação de models


- Vídeo Acessando a coleção livros
Capturar todos os livros via mongoose e mongoAtlas
Criação de variável de ambiente com .env
Sugestão: inserir para saber mais sobre variáveis de ambiente e mongoose (como funcionam os métodos?)

## Aula 04

-> Vídeo Criando controller para livro
Refatoração a partir da divisão das responsabilidades de controller (controlar a req e res) e Routes

O static é uma palavra-chave que usamos quando queremos usar métodos de uma classe sem ter que, antes, instanciar essa classe. Ou seja, eu não quero criar um new LivroController e só, então, conseguir usar os métodos. Eu quero poder chamar eles de forma estática. Portanto, é para isso que essa palavra-chave está aí.

-> vídeo controller Post
bloco try catch, entendendo o erro como parâmetro e propriedade, refatorando livrosRoutes para padrão barril: Criando ponto de entrada para as rotas com um index.js para ser acessado pelo resto da aplicação

uso de middlewares .use() -> método express para utilização de middlewares
servidor express é enviado como parâmetro para as routes

-> vídeo controller put
Atualização com o método de busca por ID via mongoose e inserção do PUT

-> vídeo controller delete
método mongoose findByIdAndDelete . Teste das rotas no postman e reforço do retorno do objeto create

## Aula 05

Vídeo Criando Autores
Entender uma API rest e CRUD, que é a base de um desenvolvimento back-end web

normalização de bancos através de chaves
NoSQL -> dados que são vistos juntos precisam ser guardados juntos (embedding, incorporar)
SQL -> referencing (fazendo referência entre partes diferentes a coleções diferentes)

export de autor e autorSchema para importar o autor como uma propriedade de livro

Inserção de Model, Routes, Controller de Autores

Vídeo Unindo livros e autores

Devemos deixar o import de autor entre chaves { autor } porque não se trata de uma importação padrão de um módulo único, e sum um aexportação de uma lista de módulos. Portanto, devemos especificar qual módulo desejamos importar, colocando-o entre chaves.

no arquivo Autor.js são exportados dois módulos: autor e autorSchema. Ao importar o autor entre chaves, estamos especificando que queremos importar apenas o módulo autor e não o autorSchema. Isso é necessário para que possamos utilizar o autor corretamente no arquivo autorController.js.

Modificação nas rotas no ponto de entrada index.js

Adiciona propriedade de autor dentro do model livroSchema

Para criar o embedding de informações de autores em livros 
A forma de estruturar um modelo depende do tipo de banco e da biblioteca utilizada para a integração

mongo é mais flexível que o SQL
