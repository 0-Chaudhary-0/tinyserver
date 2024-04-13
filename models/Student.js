const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    fathersName: { type: String, required: true },
    gender: { type: String, required: true },
    surname: { type: String, required: true },
    studentWhatsapp: { type: Number, required: true },
    parentWhatsapp: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    alreadyStudying: { type: String, required: true },
    admissionClass: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Student || mongoose.model("Student", StudentSchema);
