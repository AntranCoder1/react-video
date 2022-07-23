const mongoose = require("mongoose");

const connect = () => {
    mongoose
        .connect("mongodb+srv://tranthanhan:1234@react-youtube.bkbsw.mongodb.net/react-youtube")
        .then(() => {
            console.log("Connect to DB");
        })
        .catch((err) => {
            throw err;
        });
};

module.exports = { connect };