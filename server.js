const express = require("express");
const pkg  = require("./package.json");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname +`/dist/${pkg.name}`));
app.listen(port, () => {
    console.log("Server started on port ", port);
})