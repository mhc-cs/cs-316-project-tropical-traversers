const { MongoClient } = require("mongodb")
require ("dotenv").config({path: "./config.env"})

//Define schema
const Schema = mongoose.Schema
const user_account = new Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: Number,
})



async function main() {

    //Establish Connection
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)


    try{
        //Connect to database
        await client.connect()
        const database = client.db("Tropical_Traverse")
        const collections = await database.collections()

        if (collections.length > 0) {
            collections.forEach((collection) =>
                console.log(collection.collectionName)
                )
        } else {
            console.log("No Collections Found")
        }
    } catch(e) {
        console.error(e)
    } finally {
        await client.close()
    }
}


main()