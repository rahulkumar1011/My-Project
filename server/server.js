// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/campusVision', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

// const User = mongoose.model('User', UserSchema);

// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;
//   const user = new User({ username, password });
//   await user.save();
//   res.send({ success: true });
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username, password });
//   if (user) {
//     res.send({ success: true });
//   } else {
//     res.send({ success: false });
//   }
// });

// app.listen(5000, () => console.log('Server running on port 5000'));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/campusVision', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Models
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String
}));

const College = require('./models/College');

// Routes
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.send({ success: true });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  res.send({ success: !!user });
});

app.post('/add-college', async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).send({ success: true });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
});

app.get('/colleges', async (req, res) => {
  try {
    const colleges = await College.find();
    res.send(colleges);
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

