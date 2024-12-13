const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const path = require('path');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
// MongoDB connection setup
const uri = "mongodb+srv://avishek:perseverance@database.qbio8qc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const dbName = "Aces_techfest";



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, images)
app.use(express.static(path.join(__dirname, 'public')));


app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blog1', (req, res) => {
    res.render('blog1');
});

app.get('/blog2', (req, res) => {
    res.render('blog2');
});

app.get('/blogs', (req, res) => {
    res.render('blogs');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/r/o/b/o/t/s', (req, res) => {
    const filePath = path.join(__dirname, 'robots.txt');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("File not found!");
        }
    });
});

app.get('/hints', (req, res) => {
    res.render('hints');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/reset-password', (req, res) => {
    res.render('reset-password');
});

app.get('/scoreboard', (req, res) => {
    res.render('scoreboard');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});


app.listen(port, () => {
    console.log('Server running on http://localhost:3000');
});
