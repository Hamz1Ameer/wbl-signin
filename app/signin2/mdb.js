const { MongoClient } = require("mongodb");

// Connection URI. Replace <username>, <password>, and <dbname> with your MongoDB credentials.
const uri =
  "mongodb+srv://ameerhamza:ameerhamza007@cluster0.leuwfwj.mongodb.net/";
// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Select the database and collection
    const database = client.db("WBL_signin");
    const collection = database.collection("users");

    // Data to be inserted into the database
    const details = { name: "John Doe", email: "john@example.com", age: 30 };

    // Insert a single document
    const result = await collection.insertOne(details);
    console.log(`Inserted ${result.count()} document into the collection`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

// Call the main function
main().catch(console.error);
