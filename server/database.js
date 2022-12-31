import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export const getNotes = async () => {
  const [rows] = await pool.query('SELECT * FROM notes')
  return rows;
}

export const getNote = async (id) => {
  const [rows] = await pool.query(`
  SELECT * 
  FROM notes
  WHERE id = ?
  `, [id])
  return rows[0];
}

export const createNote = async ( title, content, createdDate) => {
  const [result] = await pool.query(`
  INSERT INTO notes (title, content, date)
  VALUES (?, ?, ?)
  `, [title, content, createdDate])
  const id = result.insertId
  return getNote(id)
}

export const deleteNote = async (id) => {
  const result = await pool.query(`
  DELETE 
  FROM notes 
  WHERE id = ?
  `, [id])
  return getNotes();
}

export const updateNote = async (title, content, updatedDate, id) => {
  const result = await pool.query(`
  UPDATE notes
  SET title = ?, content = ?, date = ?
  WHERE id = ?
  `, [title, content, updatedDate, id ])
  return getNote(id);
}

// const result = await createNote('test', 'test', date)
// console.log(result);

// const updatedDate = new Date();
// const updateNotes = await updateNote('updated test title', 'updated test content', updatedDate, 4);
// console.log(updateNotes);

// const deleteSingleNote = await deleteNote(4)
// console.log(deleteSingleNote)

// const notes = await getNotes()
// console.log(notes)