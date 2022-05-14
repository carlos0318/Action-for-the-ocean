const express = require("express");
const routerApi = require("./routes");
const app = express();
const port = 3000;

app.get("/", (res) => {
    res.send("Hello World");
});

routerApi(app);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});