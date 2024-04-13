const express = require('express')
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken");
const router = express.Router()


// SignUp API Is Here
router.post('/signup', async (req, res) => {
    try {
        let { name, email, password } = await req.body

        // Encrypt
        const cipherPassword = CryptoJS.AES.encrypt(JSON.stringify(password), '#@chaudhary@#').toString();

        // JWT Token
        const token = jwt.sign({ email }, "#@chaudhary@#");

        let items = new User({ name, email, password: cipherPassword });
        items.save()
        res.send({ success: true, message: "Successfully Created An Account", token: token })
    } catch (error) {
        res.send({success: false, error: `Failed To Create: ${error}` })
    }
})


// Login API Is Here
router.post('/login', async (req, res) => {
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