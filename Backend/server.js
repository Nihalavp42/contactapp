const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors=require('cors')
const Dbconnect = require('./config/db');
const contactModal = require('./models/contactModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
Dbconnect();

app.post('/api/contact', async (req, res) => {
    try {
        const { firstname, lastname, email, mobile } = req.body;
        const newContact = await contactModal.create({ firstname, lastname, email, mobile });
        res.json(newContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(3400, () => {
    console.log("Server is running on port 3400");
});
