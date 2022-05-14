const UserBeachService = require("./../services/UserBeachService");

class UserBeachController {

    static getLatestLocations(user){
        return UserBeachService.getLatestLocations(user);
    }

    static getRating(location){
        return UserBeachService.getRating(location);
    }

}

module.exports = UserBeachController;