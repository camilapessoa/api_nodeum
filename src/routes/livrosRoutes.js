import express  from "express";
import LivroController from "../controllers/livroControllers.js";

const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros); //sem parênteses porque é apenas uma referência ao método que vai ser chamado
routes.get("/livros/busca", LivroController.listarLivrosPorEditora); // ordem de complexidade de buscas de rotas. Se inserir a busca por id primeiro, o Express pode se confundir
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivroPorId);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;
