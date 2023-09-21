const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//Dummy array to store users,replace these with real database storage
const users = [];

app.post("/register", (req, res) => {
  const { email, password } = req.body;
  users.push({ email, password });

  res.json({ message: "User registered!" });
});

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080/.`);
});
