const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
`mongodb+srv://${process.env.REACT_APP_MONGO_USERNAME}:${process.env.REACT_APP_MONGO_PASSWORD}@${process.env.REACT_APP_MONGO_URL}?retryWrites=true&writeConcern=majority`;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("gamejamsdb");
    const coll = db.collection("animaux");

    // insert code goes here
    const docs = [
      {name: "Mikey"},
      {name: "Julien"},
      {name: "Comet Hyakutake"}
    ];

    const result = await coll.insertMany(docs);

    // display the results of your operation
    console.log(result.insertedIds);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
