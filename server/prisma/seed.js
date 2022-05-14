const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const beaches = require("./data/beaches");


async function runSeeders() {
 

    // Beaches
    await Promise.all(
        beaches.map(async (beach) =>
            prisma.beach.upsert({
                where: { name: beach.name },
                update: {},
                create: beach,
            })
        )
    );
  
}

(async function main() {
    try {
        // eslint-disable-next-line
        const user1 = await prisma.user.upsert({
            where: { email: "juan@dominio.com" },
            update: {},
            create: {
                name: "Juan",
                lastname: "Perez Lopez",
                email: "juan@dominio.com",
                password: "juan123",
                country: "Mexico",
                birthday: new Date("3/10/1996")
				
            },
        });
        // eslint-disable-next-line
        const user2 = await prisma.user.upsert({
            where: { email: "pedro@dominio.com" },
            update: {},
            create: {
                name: "Pedro",
                lastname: "Hernandez Gutierrez",
                email: "pedro@dominio.com",
                password: "pedro123",
                country: "Italia",
                birthday: new Date("4/26/1992")
				
            },
        });
        // eslint-disable-next-line
        const user3 = await prisma.user.upsert({
            where: { email: "ana.parra@dominio.com" },
            update: {},
            create: {
                name: "Ana",
                lastname: "Parra Novo",
                email: "ana.parra@dominio.com",
                password: "ana.parra123",
                country: "Japon",
                birthday: new Date("5/5/1995")
				
            },
        });
        // eslint-disable-next-line
        const user4 = await prisma.user.upsert({
            where: { email: "abril.mendez@dominio.com" },
            update: {},
            create: {
                name: "Abril",
                lastname: "Legorreta Mendez",
                email: "abril.mendez@dominio.com",
                password: "abril.mendez123",
                country: "España",
                birthday: new Date("7/7/1998")
				
            },
        });
        // eslint-disable-next-line
        const user5 = await prisma.user.upsert({
            where: { email: "brian.sanchez@dominio.com" },
            update: {},
            create: {
                name: "Brian",
                lastname: "Sanchez Cabrera",
                email: "brian.sanchez@dominio.com",
                password: "brian.sanchez123",
                country: "Chile",
                birthday: new Date("8/28/2001")				
            },
        });
		
        runSeeders();


    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();