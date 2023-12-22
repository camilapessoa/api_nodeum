import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number}
}, {versionKey: false}); //version key é avançado

const livro = mongoose.model("livros", livroSchema) //coleção a qual se refere e quais suas propriedades
