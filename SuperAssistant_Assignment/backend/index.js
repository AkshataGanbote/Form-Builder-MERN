const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/super_assistant');

app.listen(5001, () => {
    console.log("Server listining on http://127.0.0.1:5001");

});