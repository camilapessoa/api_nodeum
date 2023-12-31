import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js'

const conexao = await conectaNaDatabase();
conexao.on("error", (erro)=>{ //se o evento que acontecer na conexão, ele chega como parâmetro na conexão e envia o erro com as informações
    console.error("Erro de conexão", erro);
})

conexao.once("open", ()=> {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
routes(app);

//rotas
app.delete('/livros/:id', (req, res) =>{
    const index = buscaLivros(req.params.id)
    livros.splice(index, 1)
    res.status(200).send('Livro removido com sucesso')
})

export default app;

