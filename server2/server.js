const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create schema for the contact form data
const contactSchema = new mongoose.Schema({
  email: String,
  subject: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/submit', async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    const contact = new Contact({ email, subject, message });
    await contact.save();
    res.status(201).send('Message sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
