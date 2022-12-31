import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'KlausDev23!',
  database: 'notes_app'
})

const port = 8000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/notes", (req, res) => {
  const query = "SELECT * FROM notes";
  db.query(query, (err, data) => {
    if(err) return res.json(err)
    return res.json(data);
  })
})

app.post("/notes", (req, res) => {
  const query = "INSERT INTO notes ( `title`, `date`, `content`) VALUES (?)"
  const values = [
    req.body.title, 
    new Date(),
    req.body.content
  ]
  db.query(query,[values], (err, data) => {
    if(err) return res.json(err)
    return res.json("Note added");
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});