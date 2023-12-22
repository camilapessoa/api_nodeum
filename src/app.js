import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';

const conexao = await conectaNaDatabase();
conexao.on("error", (erro)=>{ //se o evento que acontecer na conexão, ele chega como parâmetro na conexão e envia o erro com as informações
    console.error("Erro de conexão", erro);
})

conexao.once("open", ()=> {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
app.use(express.json()) //middleware -> uma função executando outra função


function buscaLivros(id){
    return livros.findIndex(livro => {
        return livro.id ===Number(id)
    })
}

//rotas
app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node.js")
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
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

