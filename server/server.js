const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 4000;
const cors = require("cors");

const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req , res) => {
    res.send("Hello World!");
});

routerApi(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
