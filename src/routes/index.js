import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js";

const routes = (app) => {
     app.route("/").get((req, res)=> res.status(200).send("Curso de Noje.js - Livraria"));

     app.use(express.json(), livros, autores); //chamando middleware
}

export default routes;