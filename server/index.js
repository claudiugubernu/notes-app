import express from "express"
import { getNote, getNotes } from "./database.js";

const app = express();

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

app.get("/notes", async (req, res) => {
  const notes = await getNotes()
  res.send(notes)
})

app.get("/notes/:id", async (req, res) => {
  const id = req.params.id
  const notes = await getNote(id)
  res.send(notes)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});