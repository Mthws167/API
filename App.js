"use strict"

const express = require("express")

class App{
    static async init(){
        let app = new express();
        app.use(express.json);

        app.get("/endpoint", (req,res) => {
            res.json({
                name: "api",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Mthws167"
            });
        });
        app.listen(3000,() => {
            console.log("Iniciado")
        });
    }
}
App.init();