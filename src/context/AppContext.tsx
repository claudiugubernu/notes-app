import React, { createContext, useState } from 'react'
import { AppContextType, Note } from '../@types/models'

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([])
  const [activeNote, setActiveNote] = useState<number>(0)

  const onGetNote = () => {

  }

  const onAddNote = (note: Note) => {
    setNotes([...notes,
    {
      id: note.id,
      title: note.title,
      content: note.content,
      lastModified: note.lastModified
    }])
  }

  const onUpdateNote = (id: number, newNote: Omit<Note, "id">) => {
    setNotes(notes.map(note => note.id === id ? {
      ...note,
      title: note.title,
      content: note.content,
      lastModified: Date.now()
    } : note))
  }

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <AppContext.Provider value={{
      notes,
      setNotes,
      onAddNote,
      onUpdateNote,
      deleteNote,
      activeNote,
      setActiveNote
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider