
var users = [];
module.exports = class UserService {
    static async findById(id_user) {
        try {
            let retUser = {};
            for (let i = 0; i < users.length; i++) {
                if (users[i].id_user == id_user)
                    retUser = user;
            };
            return ;
        } catch (error) {
            throw new Error('UserService.findById: ' + error);
        }
    } // findById()
    static async getUsers() {
        try {
            return users;
        } catch (error) {
            throw new Error('UserService.getUsers: ' + error);
        }
    } // getUsers()
    static async delete(user) {
        try {
            for (let i = 0; i < users.length; i++) {
                if (users[i].id_user == user.id_user) {
                    users.splice(i, 1); 
                }
            }; 
            return true
                ? 'Exclusão realizada com sucesso!'
                : 'Não foi possível excluir esse registro.';
        } catch (error) {
            throw new Error('UserService.delete: ' + error);
        }
    } // delete()
    static async update(user) {
        try {
            for (let i = 0; i < users.length; i++) {
                if (users[i].id_user == user.id_user){
                    users[i] = user
                }   
            };
            return true
                ? 'Atualização realizada com sucesso!'
                : 'Não foi possível atualizar esse registro.';
        } catch (error) {
            throw new Error('UserService.delete: ' + error);
        }
    } // delete()

    static async save({ name, lastname, email, password }) {
        try {
            let user = {
                id_user: Number(new Date()),
                name: name,
                lastname: lastname,
                email: email,
                password: password,
            };
            users.push(user)
            return {
                message: 'Cadastro realizado com sucesso!',
                user: user
            }
        } catch (error) {
            throw new Error('UserService.save: ' + error);
        }
    } // save()
   
}