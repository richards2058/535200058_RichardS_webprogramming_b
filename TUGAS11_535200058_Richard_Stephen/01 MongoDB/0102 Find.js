var MongoDB = require("mongodb").MongoClient,
  dbURL = "mongodb://127.0.0.1:27017",
  dbName = "db-untar-cafe";

MongoDB.connect(dbURL, (err, client) => {
  if (err) throw err;
  let db = client.db(dbName);
  db.collection("untar-cafe")
    .find()
    .toArray((error, data) => {
      if (err) throw error;
      console.log(data);
    });
});
