//TO RUN SERVER IN TERMINAL TYPE: node .\server\connect.cjs
//NOW TO RUN: node .\src\app\server\connect.cjs
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

const userSchema = mongoose.Schema;
const userAccSchema = new userSchema({
    nameF: String,
    nameL: String,
    username: String,
    email: String,
    password: String,
    type: String
})

const driverSchema = mongoose.Schema;
const driverAccSchema = new driverSchema({
    nameF: String,
    nameL: String,
    username: String,
    email: String,
    password: String,
    vehicle: String,
    license: String,
    stateID: String,
    licenseImg: String,
    type: String
})


//const Account = mongoose.model('userAcc', userAccSchema);

const UserModel = mongoose.model('UserAcc', userAccSchema);
const DriverModel = mongoose.model('DriverAcc', driverAccSchema);

app.post('/userAccounts', async (req, res) => {
    try{
        const { username, email, type } = req.body;
        let Model;

        if (type === 'driver') {
            Model = DriverModel;
        } else {
            Model = UserModel;
        }

        const checkUser = await Model.findOne({ username })
        const checkEmail = await Model.findOne({ email })

            if(checkUser){
                res.json("Username Exists")
            }else if (checkEmail){
                res.json("email Exists")
            }else{                
                const newUserAcc = new Model(req.body);
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