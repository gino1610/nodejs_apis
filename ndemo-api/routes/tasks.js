module.exports = app => {
    const Tasks = app.models.tasks;
    app.get("/tasks", (req, res) => {
        Tasks.findAll({}, (tasks) => {
            res.json({tasks: tasks});
        });
    });
    
    
    // {
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
};