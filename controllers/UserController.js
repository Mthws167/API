
const UserService = require("../services/UserService")


module.exports = class UserController {
    static async getUsers(req, res) {
        try {
            res.status(200).send(await UserService.getUsers());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.getUsers ' + e.message);
        }
    } // getUsers()
    static async findById(req, res) {
        try {
            res.status(200).send(await UserService.findById(req.params.id_user));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.getUserData ' + e.message);
        }
    } // findById()
    static async delete(req, res) {
        try {
            if (!req.body.id_user)
                throw new Error('A identificação do usuário deve ser informada.');

            res.status(200).send(await UserService.delete(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.delete ' + e.message);
        }
    } // delete()
    static async save(req, res) {
        try {
            res.status(200).send(await UserService.save(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.save ' + e.message);
        }
    } // save()
    static async update(req, res) {
        try {
            res.status(200).send(await UserService.update(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserController.update ' + e.message);
        }
    } // update()
}