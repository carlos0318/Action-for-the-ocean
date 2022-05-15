const UserBeachService = require("./../services/UserBeachService");

class UserBeachController {

    static createLocation(location){
        return UserBeachService.createLoacation(location);
    }

}

module.exports = UserBeachController;