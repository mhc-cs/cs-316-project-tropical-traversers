const express = require("express")
const router = express.Router()
const Account = require("../models/userAccModel")

router.route("/create").post((req, res) => {
    const nameF = req.body.nameF
    const username = req.body.username
    const email = req.body.email
    const password = req.bost.password
    const newAcc = new Account({
        nameF,
        username,
        email,
        password
    })

    newAcc.save()

})

module.express = router