const mongoose = require('mongoose');

const conn = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/sqlEcommerce');
        console.log("ConnectDB has been established successfully.");
    } catch (error) {
        console.log("Connect DB err: ", error);
    }
};

module.exports = {
    conn: conn
};