const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-untar-cafe", {
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Succesfully connected to MongoDB using mongoose!");
});

const Member = require("./models/Member");

//type 1
var member1 = new Member({
  name: "Space The Final Frontier",
  email: "these-are@the-voyages.com",
});
member1.save((error, savedDocument) => {
  if (error) console.log(error);
  console.log(savedDocument);
});
