// module.exports = {
//   mongoURI: "mongodb+srv://julemee:mot_de_passe@cluster0.c50pte8.mongodb.net/?retryWrites=true&w=majority",
//   mongoUser: "julemee",
//   mongoPassword: "t3CiBW89seVTBNY",
// };

import { MongoClient } from 'mongodb-legacy';
import { ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://julemee:t3CiBW89seVTBNY@cluster0.c50pte8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
