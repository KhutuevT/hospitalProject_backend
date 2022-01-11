const express = require("express")
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("NodeJS");
})

app.listen(PORT, () => {
    console.log("listening on port", PORT);
});