const BeachUserService = require("./../services/BeachUserService");

class BeachUserController {

    static getLatestLocations(user){
        return BeachUserService.getLatestLocations(user);
    }

    static getRating(location){
        return BeachUserService.getRating(location);
    }

}

module.exports = BeachUserController;