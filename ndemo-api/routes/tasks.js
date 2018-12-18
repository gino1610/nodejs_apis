module.exports = app => {
    app.get("/tasks", (req, res) => {
        res.json({
            tasks: [
                { title: "Buy some shoes" },
                { title: "Fix notebook" },
                { title: "close linode account" },
                { title: "Tech CU setup" },
                { title: "civic oil change" },
                { title: "albrada" }
            ]
        });
    });
};