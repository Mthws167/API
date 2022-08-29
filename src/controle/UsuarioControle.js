"use.strict";

const UsuarioServico = require("../servico/UsuarioServico");
module.exports = class UsuarioControle{
    static async buscarPorId(req,res){
        try{
            res.status(200).send(await UsuarioServico.buscarPorId(req.params.idUsuario));
        }catch(e){
            res.status(500).send(e.message);
            console.error('UsuarioControle.buscarPorId'+e.message);
        }
    }

    static async buscarTodos(req,res){}
}