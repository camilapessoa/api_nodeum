import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import livro from './models/Livro.js'

const conexao = await conectaNaDatabase();
conexao.on("error", (erro)=>{ //se o evento que acontecer na conexão, ele chega como parâmetro na conexão e envia o erro com as informações
    console.error("Erro de conexão", erro);
})

conexao.once("open", ()=> {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
app.use(express.json()) //middleware -> uma função executando outra função



//rotas
app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node.js")
})

//async se refere a funcao callback req,res
app.get('/livros', async (req, res) => { //express que maneja
    //chamar o modelo
    const listaLivros = await livro.find({}) //é o model que manda na conexão com o banco e com todas as operações que conseguimos fazer com o banco
    res.status(200).json(listaLivros)
})

app.get('/livros/:id', (req, res) =>{
    const index = buscaLivros(req.params.id)
    res.status(200).json(livros[index]);
})

app.post('/livros', (req, res)=>{
livros.push(req.body)
res.status(201).send("Livro cadastrado com sucesso")
})

app.put('/livros/:id', (req, res) =>{
    const index = buscaLivros(req.params.id)
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
})

app.delete('/livros/:id', (req, res) =>{
    const index = buscaLivros(req.params.id)
    livros.splice(index, 1)
    res.status(200).send('Livro removido com sucesso')
})

export default app;

