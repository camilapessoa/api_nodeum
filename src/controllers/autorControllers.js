import { autor } from "../models/Autor.js"

class AutorController{
    static async ListarAutores (req, res){

        try {
        const listaAutor = await autor.find({});
        res.status(200).json(listaAutor);
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na requisição`})
        }
        
    }

    static async listarAutorPorId (req, res){

        try {
        const id = req.params.id
        const autorEncontrado = await autor.findById(id);
        res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na requisição do Autor`})
        }
        
    }

    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body)
           res.status(201).json({message: "criado com sucesso", autor: novoAutor}); 
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar Autor`});
        }
    }

    static async atualizarAutorPorId (req, res){

        try {
        const id = req.params.id
        await autor.findByIdAndUpdate(id, req.body);//objeto com os dados atualizados
        res.status(200).json({message: "Autor atualizado"});
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na atualização do Autor`});
        }
        
    }

    static async excluirAutor (req, res){

        try {
        const id = req.params.id
        await autor.findByIdAndDelete(id);
        res.status(200).json({message: "autor excluído com sucesso"});
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na exclusão do autor`});
        }
        
    }

}

export default AutorController;