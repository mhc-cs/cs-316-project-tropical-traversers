const mongoose = require("mongoose")

const userAccSchema = {
    nameF: String,
    username: String,
    email: String,
    password: String,
}

const userAcc = mongoose.model("userAcc", notesSchema)

module.exports = userAcc