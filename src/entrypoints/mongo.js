const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function connection() {
   await client.connect();
   const connection = client.db(process.env.MONGO_DB);

   return connection;
}

module.exports.mongoConnection = connection;
