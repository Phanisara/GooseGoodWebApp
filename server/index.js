const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "goosegood"
})

app.get('/ValueSensorFarm1', (req, res) => {
    db.query("SELECT * FROM sensorfarm1", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.listen('3001', () => {
    console.log('server is running on port 3001')
})