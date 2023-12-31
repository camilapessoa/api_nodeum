import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
     app.route("/").get((req, res)=> res.status(200).send("Curso de Noje.js - Livraria"));

     app.use(express.json(), livros); //chamando middleware
}

export default routes;