const mongoose = require('mongoose');

const connectDb = async () => {
  const username = encodeURIComponent("SuperiorScienceAcademy");
  const password = encodeURIComponent("#@superior@#");
  try {
    if (mongoose.connections[0].readyState) {
      console.log('Already Connected To MongoDB');
      return;
    }
    await mongoose.connect(`mongodb+srv://${username}:${password}@ssacademy.uihy77l.mongodb.net/test`);
    console.log("Connection Successfully");
  } catch (error) {
    console.log('Connection Failed' + error);
  }
}

module.exports = connectDb