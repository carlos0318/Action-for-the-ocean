const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserService {
    static async register(user) {
        const message = "Usuario Creado";
        await prisma.user.create({ data: user });
        return message;
    }

    static async login(user) {
        const query = await prisma.user.findFirst({
            where: {
                email: user.email,
                password: user.password,
            },
        });
        if (query === null) {
            throw new Error("Usuario o Contraseña incorrecto");
        } else {
            const { id, name, email } = query;

            return {
                id,
                email,
                name,
            };
        }
    }

    static async getUserData(user) {
        const query = await prisma.user.findFirst({
            where: {
                email: user.email,
            },
        });
        if (query === null) {
            throw new Error("Usuario o Contraseña incorrecto");
        } else {
            const { name, lastname, email, password, country } = query;

            return {
                name,
                lastname,
                email,
                password,
                country,
            };
        }
    }

    static async updateUser(user) {
        const query = await prisma.user.update({
            where: {
                email: user.email,
            },
            data: {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                country: user.country,
            },
        });

        return query;
    }
}

module.exports = UserService;
