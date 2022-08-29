const UsuarioControle  = require("../controle/UsuarioControle")

module.exports = class UsusarioRota{
    constructor(app){
        app.route("/ususarios")
            .get(UsuarioControle.buscarTodos)
            .post(UsuarioControle.criar)
            .put(UsuarioControle.atualizar)
            .delete(UsuarioControle.delete)
        app.route('/usuarios/:idUsuario').get(UsuarioControle.buscarPorId)
    }
}