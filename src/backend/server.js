const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "foodapp",
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO signup (`name`,`email`,`password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM signup WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  const sql =
    "INSERT INTO contact (`name`, `email`, `phone`, `message`) VALUES (?)";
  const values = [name, email, phone, message];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.json("Error");
    }
    return res.json("Success");
  });
});

app.listen(8081, () => {
  console.log("listening");
});

app.post("/createOrder", (req, res) => {
  const {
    products,
    email,
    firstName,
    lastName,
    address,
    city,
    postalCode,
    phone,
    subTotal,
    netTotal,
    paymentMethod,
    orderStatus,
  } = req.body;

  const sql =
    "INSERT INTO orders (products, email, first_name, last_name, address, city, postal_code, phone, sub_total, net_total, payment_method, order_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    products,
    email,
    firstName,
    lastName,
    address,
    city,
    postalCode,
    phone,
    subTotal,
    netTotal,
    paymentMethod,
    orderStatus,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error creating order:", err);
      return res.json("Error");
    }
    return res.json("Success");
  });
});
