import express  from "express";
import LivroController from "../controllers/livroControllers.js";

const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros); //sem parênteses porque é apenas uma referência ao método que vai ser chamado

export default routes;
