const { MongoClient } = require("mongodb")
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require ("dotenv").config({path: "./config.env"})

app.use(cors())
app.use(express.json())

//connect
mongoose.connect("mongodb+srv://willi44c:tropical_traverse@cluster0.sgw9ryn.mongodb.net/userAcc")

app.use("/", require("./routes/userAccRoute"))

//require route
app.listen(4000, function(){
    console.log("Exppress Server is running on port 3001")

})


// async function main() {

//     //Establish Connection
//     const Db = process.env.ATLAS_URI
//     const client = new MongoClient(Db)


//     try{
//         //Connect to database
//         await client.connect()
//         const database = client.db("Tropical_Traverse")
//         const collections = await database.collections()

//         if (collections.length > 0) {
//             collections.forEach((collection) =>
//                 console.log(collection.collectionName)
//                 )
//         } else {
//             console.log("No Collections Found")
//         }

//         //const usersCollection = database.collection("users")
//         const inputData = await prompt("Add user account to DB? Y/N")

//         if (inputData) {
//             const userData = await getUserInput()

//             const usersCollection = database.collection("users")
//             await usersCollection.insertOne(userdata)

//             console.log("Data inserted")
//         } else {
//             console.log("no data inserted")
//         }
        

//     } catch(e) {
//         console.error(e)
//     } finally {
//         await client.close()
//     }
// }

// function prompt(question){
//     return new Promise((resolve, reject) => {
//         rawListeners.question(question, (answer) => {
//             const trimmedAnswer = answer.trimt().toLowerCase()
//             resolve(trimmedAnswer === "y" || trimmedAnswer === "yes")
//         })
//     })
// }

// function getUserInput() {
//     return new Promise((resolve, reject) => {
//         rl.question("Enter Username: ", (username) => {
//             rl.question("Enter Password: ", (password) => {
//                 rl.question("Enter Email: ", (email) => {
//                     rl.question("Enter Phone: ", (phone) => {
//                         resolve({
//                             Username: username,
//                             Password: password,
//                             Email: email,
//                             Phone: phone
//                         })
//                         rl.close()
//                     })
//                 })
//             })
//         })
//     })
// }

// main()