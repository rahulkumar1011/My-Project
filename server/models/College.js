const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: String,
  courses: String,
  fees: Number,
  location: String,
  image: String
});

module.exports = mongoose.model('College', CollegeSchema);
