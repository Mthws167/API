const UsuarioControle = require("../controle/UsuarioControle")

module.exports =  class UsuarioRota{
    constructor(app){
        app.route("/usuarios")
            .get(UsuarioControle.buscarTodos)
            .post(UsuarioControle.criar)
            .put(UsuarioControle.atualizar)
            .delete(UsuarioControle.deletar)
        app.route('/usuario/:idUsuario').get(UsuarioControle.buscarPorId);
    }
}