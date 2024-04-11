//TO RUN SERVER IN TERMINAL TYPE: node .\server\connect.cjs
//MUST RUN WITH npm run dev for react, start server first!
// - TODO set up code to launch both at the same time
// - TODO set up a notification for when account is made + clear text boxes
// - TODO set up an blocker for repeat accounts

const { MongoClient } = require("mongodb")
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require ("dotenv").config({path: "./config.env"})

const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

//connect
mongoose.connect("mongodb+srv://willi44c:tropical_traverse@cluster0.sgw9ryn.mongodb.net/Tropical_Traverse")

const Schema = mongoose.Schema;
const userAccSchema = new Schema({
    nameF: String,
    username: String,
    email: String,
    password: String,
    type: String
})

const Account = mongoose.model('userAcc', userAccSchema);

app.post('/userAccounts', async (req, res) => {
    try{
        const { username, email } = req.body;

        const checkUser = await Account.findOne({ username })
        const checkEmail = await Account.findOne({ email })

            if(checkUser){
                res.json("Username Exists")
            }else if (checkEmail){
                res.json("email Exists")
            }else{
                const newUserAcc = new Account(req.body);

                await newUserAcc.save();
                res.status(201).send('Account created');
            }

        
    }catch (err) {
        console.error(err);
        res.status(500).send('Error creating account');
    }
})

//require route
app.listen(PORT, () => {
    console.log("Exppress Server is running on port ${PORT}")

})