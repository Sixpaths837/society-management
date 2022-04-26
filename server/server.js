const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    key: "userId",
    secret: "society",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "orangutan",
    database: "society",
    port: "3306"
});

db.connect((err) => {
    if (err) {
        throw err
    } else {
        console.log('Connected to MySQL')
    }
});

//Admin adding users
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const nam = req.body.nam;
    const hno = req.body.hno
    bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query("INSERT INTO tenant (User_ID, Password, Name, House_Number) values (?, ?, ?, ?)", [username, hash, nam, hno], (err, result) => {
            res.send(err)
        })
    })
});

//Adding Issues
app.post('/addissue', (req, res) => {
    //const issueid = req.body.issueid;
    const desc = req.body.desc;
    const rep = req.body.rep;
    const subject = req.body.subject;
    const userid = app.session.user[0].userid;

    db.query("INSERT INTO issues (Issue_ID, Subject, Reply, Description, User_ID) values ( , ?, , NULL, ?, ?)", [, desc, rep, subject, userid], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
    })
});



//Displaying Payments for a user
app.post('/showpayment', (req, res) => {
    const userid = app.session.user[0].userid;
    db.query("SELECT Amount, Duration, User_ID FROM payments WHERE User_ID=?", [userid], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send({ message: "No outstanding payments." });
        }
    })
});

//Admin resolving complaint
app.post('/addreply', (req, res) => {
    const userid = app.session.user[0].userid;
    const reply = req.reply;

    db.query("update issues set Reply = ? where User_ID = ?", [reply, userid], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        else {
            res.send({ message: "Complaint Resolved." });
        }
    })
});

//User seeing if complaint is resolved
app.post('/viewreply', (req, res) => {
    const userid = app.session.user[0].userid;
    db.query("select Subject, Reply from issues where User_ID = ? AND Reply IS NOT NULL", [userid], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send({ message: "Complaint not resolved yet." });
        }
    })
});

//Admin adding payments
app.post('/addpayments', (req, res) => {
    const userid = app.session.user[0].userid;
    db.query("insert into payments values  User_ID = ?", [userid], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send({ message: "Complaint not resolved yet." });
        }
    })
});

//Admin deleting user
app.post('/deleteuser', (req, res) => {
    const userid = app.session.user[0].userid;
    db.query("delete FROM tenant WHERE User_ID=?", [userid], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        else {
            res.send({ message: "Successfully deleted user." });
        }
    })
});

//User logging in
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM tenant WHERE User_ID=?;", [username], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].Password, (err, response) => {
                if (response) {
                    req.session.user = result;
                    res.send(result);
                }
                else {
                    res.send({ message: "Wrong username/password." });
                }
            }
            );
        }
        else {
            res.send({ message: "User doesn't exist." });
        }
    })
});

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({
            loggedIn: true, user: req.session.user
        })
    } else {
        res.send({
            loggedIn: false
        })
    }
})

app.get('/logout', (req,res)=>{
    res.clearCookie('userId');
    res.redirect('/');
})
app.listen(3001, () => {
    console.log('Connected on Port 3001');
});