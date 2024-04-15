const express = require('express')
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken");
const router = express.Router()


// Login API Is Here
router.post('/isUser', async (req, res) => {
    let { email, password } = await req.body;
    let user = await User.findOne({ email });

    if (user) {

        // Decrypt
        const bytes = CryptoJS.AES.decrypt(user.password, "#@chaudhary@#");
        const decryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        if (user.email == email && password == decryptedPassword) {

            // JWT Token
            const token = jwt.sign({ email }, "#@chaudhary@#");
            res.send({
                success: true,
                message: "Successfully Logged In",
                token: token,
            });
        } else {
            res.send({ success: false, message: `Invalid Input` });
        }
    } else {
        res.send({ success: false, message: `User Not Found` });
    }
})

module.exports = router