import express from "express";

const PORT = 3000;
const app = express();

app.set("json spaces", 4);

app.get("/", (req, res) => {
    res.json({status: "Tasks API"});
});

app.get("/tasks", (req, res) => {
    res.json({
        tasks: [
            {title: "Buy shoes"},
            {title: "Fix notebook"}    
        ]
    });
});

app.listen(PORT, () => console.log(`Task API -  Port ${PORT}`));
