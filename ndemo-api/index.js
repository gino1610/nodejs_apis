var express = require('express');
var consign = require('consign');

const PORT = 3000;
const app = express();

app.set("json spaces", 4)

consign()
    .include("models")
    .then("libs/middleware.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

// app.get("/", (req, res) => {
//     res.json({ status: "Ndemo API" })
// });

// app.get("/tasks", (req, res) => {
//     res.json({
//         tasks: [
//             { title: "Buy some shoes" },
//             { title: "Fix notebook" },
//             { title: "close linode account" },
//             { title: "Tech CU setup" },
//             { title: "civic oil change" },
//             { title: "albrada" }
//         ]
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Ndemo API - Port ${PORT}`)
// });

