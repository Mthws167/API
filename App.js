"use strict";

require("./config");

const express = require("express");
const cors = require("cors");
const FabricaConexao = require("./src/conexao/FabricaConexao")
const porta = process.env.PORT || 3000;


class App {
    static async init() {
        let app = new express();
        app.use(cors());
   

        try{
            console.log("Obtendo conexão com o banco de dados...");
            await FabricaConexao.obterConexao();
            console.log("Banco conectado com sucesso!");
        }catch(error){
            console.log(`Erro ao conecar com o banco de dados: ${error.message}`);
            process.exit(1);
        }


        app.use(express.json());

        const Usuario = require('./src/modelo/Usuario');
        new Usuario();

        const UsuarioRota = require('./src/rota/UsuarioRota');
        new UsuarioRota(app);

        const CounterRoute = require("./routes/CounterRoute");
        new CounterRoute(app);


        app.get("/", (req, res) => {
            res.json({
                name: "js-api-2022",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Matheus Henrique de Oliveira"
            })
        })

        app.get("/ping", (req, res)=>{
            res.json({"Resposta":"pong"})
        })

        app.get("/contador", (req, res)=>{
            res.json({"contador": contador})
        })

        app.get("/incremento", (req, res)=>{
            contador ++;
            res.json({"contador": contador})
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
        new CounterRoute(app)
   
    }
}
App.init();