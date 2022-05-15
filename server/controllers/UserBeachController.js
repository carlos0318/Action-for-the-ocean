const UserBeachService = require("./../services/UserBeachService");

class UserBeachController {

    static createLocation(location){
        return UserBeachService.createLoacation(location);
    }

    static getAllRatings(){
        return UserBeachService.getAllRatings();
    }

}

module.exports = UserBeachController;