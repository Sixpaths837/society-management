const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "society",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "orangutan",
  database: "society",
  port: "3306",
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to MySQL");
  }
});

//users
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const nam = req.body.nam;
  const hno = req.body.hno;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.query(
      "INSERT INTO tenant (User_ID, Password, Name, House_Number) values (?, ?, ?, ?);",
      [username, hash, nam, hno],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "OK" });
        }
      }
    );
  });
});

//Adding Issues
app.post("/addissue", (req, res) => {
  const desc = req.body.desc;
  const subject = req.body.subject;
  const userid = req.session.user[0].User_ID;

  db.query(
    "INSERT INTO issues ( Subject, Description, User_ID) values ( ?, ?, ?);",
    [subject, desc, userid],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send({ message: "OK", Issue_Id: result.insertId });
      }
    }
  );
});

//Displaying Payments for a user
app.post("/showpayment", (req, res) => {
  const userid = req.session.user[0].User_ID;
  db.query(
    "SELECT Payment_ID, Amount, Duration, User_ID FROM payments WHERE User_ID=? AND Bank_Transaction_Number IS NULL",
    [userid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      }
      if (result.length > 0) {
        res.json(result);
      } else {
        res.send({ message: "No outstanding payments." });
      }
    }
  );
});

//Admin viewing all outstanding payments
app.post("/showallpayments", (req, res) => {
  const userid = req.session.user[0].User_ID;
  db.query(
    "SELECT Payment_ID, Amount, Duration, User_ID FROM payments WHERE Bank_Transaction_Number IS NULL",
    [userid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      }
      if (result.length > 0) {
        res.json(result);
      } else {
        res.send({ message: "No outstanding payments." });
      }
    }
  );
});

//Admin resolving complaint
app.post("/addreply", (req, res) => {
  const issueid = req.body.Issue_ID;
  const reply = req.body.reply;

  db.query(
    "update issues set Reply = ? where Issue_ID = ?;",
    [reply, issueid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      } else {
        res.send({ message: "Complaint Resolved." });
      }
    }
  );
});

//User seeing if complaint is resolved
app.post("/viewreply", (req, res) => {
  const userid = req.session.user[0].User_ID;
  const issueid = req.body.Issue_ID;
  db.query(
    "select Subject, Reply from issues where User_ID = ? AND Reply IS NOT NULL AND Issue_ID = ?",
    [userid, issueid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      }
      if (result.length > 0) {
        res.json(result);
      } else {
        res.send({ message: "Complaint not resolved yet." });
      }
    }
  );
});

//User making payment
app.post("/makepayment", (req, res) => {
  const tno = req.body.tno;
  const userid = req.session.user[0].User_ID;
  const pid = req.body.Payment_ID;
  db.query(
    "update payments set Bank_Transaction_Number = ? where User_ID = ? and Payment_ID = ?;",
    [tno, userid, pid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      } else {
        res.send({ message: "Payment successfully made." });
      }
    }
  );
});

//Admin adding payments
app.post("/addpayments", (req, res) => {
  const amount = req.body.amount;
  const ttype = req.body.ttype;
  const tmode = req.body.tmode;
  const dur = req.body.dur;
  const userid = req.session.user[0].User_ID;
  db.query(
    "insert into payments (Amount, Transaction_Type, Transaction_Mode, Duration, User_ID) values (?,?,?,?,?);",
    [amount, ttype, tmode, dur, userid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      } else {
        res.send({ message: "OK", Payment_ID: result.insertId });
      }
    }
  );
});

//make a .get that gets house details and society name by userid
app.post("/gethousedeets", (req, res) => {
  const userid = req.body.User_ID;
  db.query(
    "select s.Name_Of_Society, h.House_Number, h.Block_Number from society s, house h, tenant t where h.Society_ID = s.Society_ID AND h.House_Number = t.House_Number AND t.User_ID = ?;",
    [userid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      } else {
        res.json(result);
      }
    }
  );
});

//Admin deleting user
app.post("/deleteuser", (req, res) => {
  const userid = req.body.User_ID;
  db.query(
    "delete FROM payments WHERE User_ID = ?;",
    [userid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      }
    }
  );
  db.query("delete FROM issues WHERE User_ID = ?;", [userid], (err, result) => {
    if (err) {
      res.json({ err: err });
    }
  });
  db.query("delete FROM tenant WHERE User_ID = ?;", [userid], (err, result) => {
    if (err) {
      res.json({ err: err });
    } else {
      res.send({ message: "Successfully deleted user." });
    }
  });
});

//Admin adding houses
app.post("/addhouse", (req, res) => {
  const hno = req.body.House_Number;
  const htype = req.body.Type_Of_House;
  const bno = req.body.Block_Number;
  const sid = req.body.Society_ID;
  db.query(
    "insert into house (House_Number, Type_Of_House, Block_Number, Society_ID) values (?,?,?,?);",
    [hno, htype, bno, sid],
    (err, result) => {
      if (err) {
        res.json({ err: err });
      } else {
        res.send({ message: "OK!" });
      }
    }
  );
});

//User logging in
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "admin" && password === "gdEJjKexKP44Mf8") {
    const result = [{ User_ID: username }, {}];
    req.session.user = result;
    res.send([result]);
  } else {
    db.query(
      "SELECT * FROM tenant WHERE User_ID=?;",
      [username],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result.length > 0) {
          bcrypt.compare(password, result[0].Password, (err, response) => {
            if (response) {
              req.session.user = result;
              res.send(result);
            } else {
              res.send({ message: "Wrong username/password." });
            }
          });
        } else {
          res.send({ message: "User doesn't exist." });
        }
      }
    );
  }
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.json({
      loggedIn: true,
      user: req.session.user,
    });
  } else {
    res.json({
      loggedIn: false,
    });
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("userId");
  res.redirect("/");
});
app.listen(3001, () => {
  console.log("Connected on Port 3001");
});
