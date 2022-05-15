const UserBeachService = require("./../services/UserBeachService");

class UserBeachController {

    static createLocation(user){
        return UserBeachService.createLocation(user);
    }

}

module.exports = UserBeachController;