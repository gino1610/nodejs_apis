module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { title: "Buy some shoes" },
                { title: "Fix notebook" },
                { title: "close linode account" },
                { title: "Tech CU setup" },
                { title: "civic oil change" },
                { title: "albrada" },
                { title: "from models folder" },
            ]
            );
        }
    };
};