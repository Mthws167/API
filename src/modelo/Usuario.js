"use strict";

const mongoose = require("mongoose");

module.exports = class Usuario extends mongoose.Schema{
    constructor(){
        super({
            nome:String,
            sobrenome:String,
            email:String,
            senha:String,
            permissoes:String,
            status:String,
            create_at:Date,
            acess_at:Date,
            update_at:Date
        });
        mongoose.model("Usuario",this);
    }
}