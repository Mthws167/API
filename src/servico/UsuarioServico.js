"use.strict";

const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario");

module.exports = class UsuarioServico {
    static async buscarPorId(IdUsuario){
        try{
            return await Usuario.findById(IdUsuario);
        }catch(error){
            throw new Error("UsuarioServico.buscarPorId: "+error);
        }
    }

    static async buscarTodos() {
        try {
            return await Usuario.find({});
        } catch (error) {
            throw new Error("UsuarioServico.buscarTodos: " + error);
        }
    }

    static async criar(usuario) {
        try {
            return await Usuario.create(usuario);
        } catch (error) {
            throw new Error("UsuarioServico.criar: " + error);
        }
    }

    static async deletar(usuario) {
        try {
            if(!usuario._id){
                throw new Error("A identificação do usuário deve ser informada." )
            }
            return await Usuario.findOndeAndDelete({_id:usuario._id});
        } catch (error) {
            throw new Error("UsuarioServico.deletar: " + error);
        }
    }

    static async atualizar(usuario) {
        try {
            return await Usuario.findByIdAndUpdate(usuario._id, usuario);
        } catch (error) {
            throw new Error("UsuarioServico.atualizar: " + error);
        }
    }

}