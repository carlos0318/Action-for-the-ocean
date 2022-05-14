const UserService = require("./../services/UserService");

class UserController {

    static register(user){
        return UserService.register(user);
    }
	
    static login(user){
        return UserService.login(user);
    }
	
    static updateUser(user){
        return UserService.updateUser(user);
    }

}

module.exports = UserController;