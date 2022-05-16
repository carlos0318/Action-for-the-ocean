# Action for the ocean

Action for the ocean es un proyecto realizado para el hackathon de LaunchX que ayudara a la conservación de playas y oceanos de México. 
Team:
**https://github.com/roblesvargas97** // **https://github.com/hpoggi** // **https://github.com/carlos0318** // **https://github.com/PabloLeonA** //
## Funcionamiento de la pagina

Ingresando a la aplicacion
![Captura](https://i.imgur.com/HHG4NIC.gif)

Landing page con el objetivo del proyecto <br>
![Captura](https://i.imgur.com/On09c7r.gif)

Consulta las playas y califica que tan contaminadas están  <br>
![Captura](https://i.imgur.com/q0BekaG.gif)

Edita y personaliza tu información de perfil <br>
![Captura](https://i.imgur.com/N1VluPv.gif)

Crea tus alertas e informa a los usuarios del estado de las playas <br>
![Captura](https://i.imgur.com/QaMh1Hq.gif)

Deslogueate de la aplicación <br>
![Captura](https://i.imgur.com/BlOa9QC.gif)

### Inicia el Proyecto

1. Clona el repositorio.
2. Crear una nueva base de datos en MariaDB.
3. Ejecuta el siguiente comando en terminal: `cd server`
4. Ejecuta el siguiente comando en terminal: `npm install`
6. Ejecuta el siguiente comando en terminal: `npx prisma migrate dev --name init` (para crear la tabla)
7. Dentro del folder server, crea el archivo llamado `.env` con el siguiente contenido:
`DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASENAME"` (reemplaza USER, PASSWORD and DATABASENAME con tus credenciales)
8. Ejecuta el siguiente comando en terminal: `npm prisma/seed.js` (para inicializar datos en la base de datos)
9. Ejecuta el siguiente comando en terminal: `npm start`
10. En otra terminal, ejecuta el siguiente comando en terminal: `cd client`
11. Ejecuta el siguiente comando en terminal: `npm install`
12. Ejecuta el siguiente comando en terminal: `npm start`
13. Visita la siguiente URL: `http://localhost:3000`

## Server

Se levanta el server en express en el puerto `3000` donde pasaremos las rutas por medio del routerApi creado en `./routes`.

``` javascript
const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req , res) => {
    res.send("Hello World!");
});

routerApi(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
```
## Routes 

### Api Routes

Se crean la conexion de api para las routes:

``` javascript
const express = require("express");
const usersRoutes = require("./usersRoutes");
const usersBeach = require("./usersBeach");

function routerApi(app) {
    const router = express.Router();
    app.use("/api/v1", router);
    router.use("/users", usersRoutes);
    router.use("/usersBeach", usersBeach);
}

module.exports = routerApi;
```

### userRoutes
Aqui se crea la conexion con controllers/UserController una vez calidando el correo nos arroja 200 si es correcto y sino un 400 y un mensaje de error

``` javascript
const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
        };
        const login = await UserController.login(userData);
        return res.status(200).json({
            message:login
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

router.post("/register", async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            country: req.body.country
        };
        const register = await UserController.register(userData);
        return res.status(200).json({
            message: register
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

router.post("/update" , async (req , res) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password,
        };
        const userInfo = await UserController.getUserData(userData);
        return res.status(200).json({
            message: userInfo
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});

router.put("/update", async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            country: req.body.country
        };
        const update = await UserController.updateUser(userData);
        return res.status(200).json({
            message: update
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

module.exports = router;
```

### userBeachRoutes

Aqui se crea la conexion con controllers/UserBeachController en caso de que la conexion sea correcta nos arrojara 200 en caso de que no sea correcta nos arroja 400 y un mensaje de error.

``` javascript
const express = require("express");
const UserBeachController = require("./../controllers/UserBeachController");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const userData = {
            userId: req.body.userId,
            beachId: req.body.beachId,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            rating: req.body.rating
        };
        const createLocation = await UserBeachController.createLocation(userData);
        return res.status(200).json({
            message: createLocation
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

module.exports = router;
```

## Services
### UserServices

Aqui creamos los servcios del usuario donde se podra registrar, logear a la aplicacion y actualizar su información.

``` javascript 
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
```
### UserBeach Services

Aqui en este servicio manejaremos la creacion de las locaciones y retornaremos las playas cercanas a la posicion del usuario, y traeremos el rating de las estrellas que tiene dicha playa.

``` javascript
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
```
### Referencia de la API

#### Crear usuario

```http
  POST /api/v1/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name,lastname,email,password,country` | `JSON` | Permite crear un nuevo usuario |

#### Logear

```http
  POST /api/v1/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email,password` | `JSON` | Permite logearnos a la aplicacion |

#### Traer informacion del usuario

```http
  POST http://localhost:4000/api/v1/users/update
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `JSON` | Traer Informacion del usuario |

#### Actualizar informacion del usuario

```http
  PUT http://localhost:4000/api/v1/users/update
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email,lastname,email,password,country` | `JSON` | Actualizar la información del usuario |

#### Crear playa

```http
  POST http://localhost:4000/api/v1/users/update
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId,latitude,longitude,rating` | `JSON` | Crear nueva playa donde se encuentre el usuario |

#### Traer todas las playas

```http
  GET http://localhost:4000/api/v1/users/update
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| N/A | N/A | Traer todas las locaiones de las playas |

## Diseño de la Base de datos

![Captura](https://i.imgur.com/PogECzk.png)





