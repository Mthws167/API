"use strict";

const mongoose  =require("mongoose")

class FabricaConexao{
    static async obterConexao(){
       let url;
       let{db}=global.config;
       let options = {
        keepAlive:true,
        userNewUrlParser:true,
        useUnifiedTopology:true,
        connectTimeoutMS:3000
       };

       if(!db.username && !db.password){
        url = `mongodb://${db.url}/${db.name}`;
       }else{
        url = `mongodb+srv://${db.username}:${db.password}@${db.url}/${db.name}?retryWrites=true&w=majority`;
       }
       return mongoose.connect(url,options)
    }

}

module.exports = FabricaConexao;