
const UserController = require("../controllers/UserController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/user")
            .get(UserController.getUsers)
            .post(UserController.save)
            .put(UserController.update)
            .delete(UserController.delete)
        
        app.route('/users/:id_user').get(UserController.findById);
    }
}