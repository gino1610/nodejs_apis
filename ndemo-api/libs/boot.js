module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`NDemo API -- Port ${app.get("port")}`);
    });
};