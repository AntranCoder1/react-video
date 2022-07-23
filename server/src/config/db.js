const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .connect(process.env.MONGO_DB)
        .then(() => {
            console.log("Connect to DB");
        })
        .catch((err) => {
            throw err;
        });
};

module.exports = { connect };