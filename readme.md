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