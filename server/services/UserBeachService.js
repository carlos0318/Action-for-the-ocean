const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserBeachService {

    static async createLoacation (location) {
        const message = "Locacion creada";

        const radius = 0.001;

        const latitude = location.latitude;
        const longitude = location.longitude;

        const higherLatitude = latitude + radius;
        const lowerLatitude = latitude - radius;
        const higherLongitude = longitude + radius;
        const lowerLongitude = longitude - radius;


        const beachId = await prisma.$queryRaw`select ID from (
		SELECT ID, (Beach.latitude-${lowerLatitude}+${higherLatitude}-Beach.latitude+ Beach.longitude-${lowerLongitude}+${higherLongitude}-Beach.longitude)/4 as promedio FROM Beach
		WHERE Beach.latitude between ${lowerLatitude} and ${higherLatitude}
		and Beach.longitude between ${lowerLongitude} and ${higherLongitude}
		)as subtable limit 1`;

        if(beachId.length>0){
            location.beachId = beachId[0].ID;
            await prisma.userBeach.create({data: location});
        }else{
            const date = Date.now();
		
            const beach = {			
                name: "Playa "+date,
                latitude: location.latitude,
                longitude: location.longitude,
                radius: 0.007
            };
            await prisma.beach.create({data: beach});
            await prisma.userBeach.create({data: location});
        }
        return message;
    }

    static async getAllRatings(){
        const ratings = await prisma.$queryRaw`select avg(UserBeach.rating) as rating, Beach.latitude, Beach.longitude, Beach.name from UserBeach
		inner join Beach on Beach.id = UserBeach.beachId group by beachId`;

        return ratings;
    }


}

module.exports = UserBeachService;