import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js"

class LivroController{
    static async ListarLivros (req, res){

        try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na requisição`})
        }
        
    }

    static async listarLivroPorId (req, res){

        try {
        const id = req.params.id
        const livroEncontrado = await livro.findById(id);
        res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na requisição do Livro`})
        }
        
    }

    static async cadastrarLivro(req, res){
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor)// dentro vai ter o id do novo autor que vai ser passado pelo findbyid e retorna o objeto autor. E agora pode criar o objeto completo para passar ao banco
            const livroCompleto = {...novoLivro, autor:{...autorEncontrado._doc}} //entrar no objeto e pegar as informações da propriedade _doc

            const livroCriado = await livro.create(livroCompleto);

           res.status(201).json({message: "criado com sucesso", livro: livroCompleto}); 
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`});
        }
    }

    static async atualizarLivroPorId (req, res){

        try {
        const id = req.params.id
        await livro.findByIdAndUpdate(id, req.body);//objeto com os dados atualizados
        res.status(200).json({message: "livro atualizado"});
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na atualização do Livro`});
        }
        
    }

    static async excluirLivro (req, res){

        try {
        const id = req.params.id
        await livro.findByIdAndDelete(id);
        res.status(200).json({message: "livro excluído com sucesso"});
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na exclusão do Livro`});
        }
        
    }

}

export default LivroController;