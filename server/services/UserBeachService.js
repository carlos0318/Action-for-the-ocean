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
		SELECT ID, (BEACH.latitude-${lowerLatitude}+${higherLatitude}-BEACH.latitude+ BEACH.longitude-${lowerLongitude}+${higherLongitude}-BEACH.longitude)/4 as promedio FROM BEACH
		WHERE BEACH.latitude between ${lowerLatitude} and ${higherLatitude}
		and BEACH.longitude between ${lowerLongitude} and ${higherLongitude}
		order by promedio asc
		)as subtable limit 1`;


		

        if(beachId){
            location.beachId = beachId;
        }else
            throw new Error("La locacion no se encuentra en una playa registrada"); 
		
        await prisma.userBeach.create({data: location});
        return message;
    }
	
    static async getAllRatings(){
        const ratings = await prisma.$queryRaw`select avg(userBeach.rating) as rating,beach.latitude, beach.longitude, beach.name from userBeach
		inner join beach on beach.id = userBeach.beachId group by beachId`;
		
        return ratings;
    }


}

module.exports = UserBeachService;