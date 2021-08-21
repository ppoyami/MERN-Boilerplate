require('dotenv').config();

module.exports = {
  // MONGO_URI: `mongodb+srv://scvd03:intae@4499!@cluster0.a8fdk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  MONGO_URI: process.env.MONGO_URI,
};
