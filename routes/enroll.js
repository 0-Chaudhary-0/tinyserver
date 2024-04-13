const express = require('express')
const Student = require('../models/Student')
const router = express.Router()


router.post('/enroll', async (req, res) => {
    try {
        let { name, fathersName, gender, surname, studentWhatsapp, parentWhatsapp, email, address, alreadyStudying, admissionClass } = await req.body

        let student = new Student({ name, fathersName, gender, surname, studentWhatsapp, parentWhatsapp, email, address, alreadyStudying, admissionClass });
        student.save()
        res.send({ success: true, message: "Form Successfully Submitted" })
    } catch (error) {
        res.send({success: false, error: `Failed To Submit: ${error}` })
    }
})

module.exports = router