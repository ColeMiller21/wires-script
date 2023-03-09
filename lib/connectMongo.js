const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const uri = process.env.MONGO_URI;
const connectMongo = async () => mongoose.connect(uri);

module.exports = connectMongo;
