const mongoose = require("mongoose");

// const host = "localhost";
// const port = "27017";
// const db = "hr";

const remoteHost = "cluster0.z09u8.mongodb.net";
const remoteUser = "mongodb";
const remotePass = "mongoDBPass";
const remoteDb = "hr";

exports.mongoConnect = () => {
  // const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  const mongoStringConnection = `mongodb+srv://${remoteUser}:${remotePass}@${remoteHost}/${remoteDb}?retryWrites=true&w=majority`;
  mongoose.connect(mongoStringConnection);
  mongoose.Promise = global.Promise;
  const dbConnection = mongoose.connection;
  dbConnection.on("error", console.error.bind(console, "Mongodb connection error"));
};
