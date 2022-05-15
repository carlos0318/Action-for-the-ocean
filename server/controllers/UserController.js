const UserService = require("./../services/UserService");

class UserController {

    static async register(user){
        return UserService.register(user);
    }

    static login(user){
        return UserService.login(user);
    }

    static updateUser(user){
        return UserService.updateUser(user);
    }

    static getUserData(user){
        return UserService.getUserData(user);
    }
}

module.exports = UserController;