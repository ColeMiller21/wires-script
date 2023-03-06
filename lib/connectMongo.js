const mongoose = require("mongoose");
require("dotenv").config({ path: "../../env" });

const uri =
  "mongodb+srv://WIRES_ADMIN:sTgKwjk7RWr4MjeUCGma@cluster0.9v0lcl0.mongodb.net/?retryWrites=true&w=majority";
const connectMongo = async () => mongoose.connect(uri);

module.exports = connectMongo;
