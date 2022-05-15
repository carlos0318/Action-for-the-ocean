const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserBeachService {

    static async register (user) {
        const message = "Usuario Creado";
        await prisma.user.create({data: user});
        return message;
    }


}

module.exports = UserBeachService;