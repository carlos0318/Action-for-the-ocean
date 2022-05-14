const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const beaches = require("./data/beaches");
const userbeaches = require("./data/userBeaches");


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
		
		const userBeach1 = await prisma.userBeach.upsert({
			where: {id: 1},
			update: {
				latitude: 21.13973,
				longitude: -86.76884,
				userId: 1,
				beachId: 1,
			},
			create: {
				latitude: 21.13973,
				longitude: -86.76884,
				userId: 1,
				beachId: 1,
			},
		});
		
		const userBeach2 = await prisma.userBeach.upsert({
			where: {id: 2},
			update: {
				latitude: 21.06196,
				longitude: -86.77858,
				userId: 1,
				beachId: 2,
			},
			create: {
				latitude: 21.06196,
				longitude: -86.77858,
				userId: 1,
				beachId: 2,
			},
		});
		
		const userBeach3 = await prisma.userBeach.upsert({
			where: {id: 3},
			update: {
				latitude: 21.13973,
				longitude: -86.76884,
				userId: 2,
				beachId: 1,				
			},
			create: {
				latitude: 21.13973,
				longitude: -86.76884,
				userId: 2,
				beachId: 1,
			},
		});
		
			
		const userBeach4 = await prisma.userBeach.upsert({
			where: {id: 4},
			update: {latitude: 21.1323201,
				longitude: -86.7463679,
				userId: 2,
				beachId: 4,},
			create: {
				latitude: 21.1323201,
				longitude: -86.7463679,
				userId: 2,
				beachId: 4,
			},
		});
	
		
		


    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();