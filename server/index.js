import express from "express"
import { createNote, deleteNote, getNote, getNotes, updateNote } from "./database.js";
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = process.env.LOCALHOST_PORT || 8080

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/", async (req, res) => {
  const notes = await getNotes()
  res.send(notes)
})

app.get("/:id", async (req, res) => {
  const id = req.params.id
  const notes = await getNote(id)
  res.send(notes)
})

app.post("/", async (req, res) => {
  const {title, content, date} = req.body
  const note = await createNote(title, content, date)
  res.status(201).send(note)
})

app.delete("/:id", async (req, res) => {
  const id = req.params.id
  const deleteSelectedNote = await deleteNote(id)
  res.send(deleteSelectedNote)
})

app.put("/:id", async (req, res) => {
  const {title, content, date} = req.body
  const id = req.params.id
  const updatedNote = await updateNote(title, content, date, id)
  res.send(updatedNote)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})