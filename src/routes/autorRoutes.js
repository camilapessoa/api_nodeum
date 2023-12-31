import express  from "express";
import AutorController from "../controllers/autorControllers.js";

const routes = express.Router();

routes.get("/autores", AutorController.ListarAutores); //sem parênteses porque é apenas uma referência ao método que vai ser chamado

routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutorPorId);
routes.delete("/autores/:id", AutorController.excluirAutor);

export default routes;
