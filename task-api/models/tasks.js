module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                {title: "Buy shoes"},
                {title: "Fix notebook"}
            ]);
        }
    };
};