const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB Atlas
// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://kalpesh:kalpesh@cluster0.x5xzlro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
});


// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});
const User = mongoose.model('User', userSchema);

// Register Endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send('Incorrect password');
        }
        res.status(200).send('Login successful');
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

// Explore Movie Endpoint
app.get('/explore/movie', (req, res) => {
    // Handle requests to explore movies here
    // You can fetch movie data from a database or external API
    res.send('Explore movies endpoint');
});

// Start the server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
