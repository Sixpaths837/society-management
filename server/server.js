const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    password: "orangutan",
    database: "society",
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const nam = req.body.nam;
    const hno = req.body.hno
    bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query("INSERT INTO tenant (User_ID, Password, Name, House_Number) values (?, ?, ?, ?)", [username, hash, nam, hno], (err, result) => {
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
            bcrypt.compare(password, result[0].password, (err, response)=>{
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