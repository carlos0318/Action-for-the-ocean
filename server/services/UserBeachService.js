const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserBeachService {

    static async createLoacation (location) {
        const message = "Locacion creada";
        await prisma.userBeach.create({data: location});
        return message;
    }


}

module.exports = UserBeachService;