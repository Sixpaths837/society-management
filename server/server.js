const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "orangutan",
    database: "Society",
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const nam = req.body.nam;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query("INSERT INTO tenant (username, password, name) values (?, ?, ?)", [username, hash, nam], (err, result) => {
            console.log(err);
        })
    })
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM tenant WHERE username=?;", username, (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (error, response)=>{
                if(response) {
                    res.send(result);
                }
                else {
                    res.send({ message: "Wrong username/password." });
                }
            }
            );
        }
        else {
            res.send({ message: "User doesnt exist." });
        }
    })
});

app.listen(3001, () => {
    console.log('Connected on Port 3001');
});