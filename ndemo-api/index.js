var express = require('express');

const PORT = 3000;
const app = express();

app.get("/", (req,res) => {
    res.json({status: "Ndemo API"})
});

app.listen(PORT, () => {
    console.log(`Ndemo API - Port ${PORT}`)
});

