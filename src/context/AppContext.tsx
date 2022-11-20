import React, { createContext, useEffect, useState } from 'react'
import { AppContextType, Note } from '../@types/models'
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', [])
  const [activeNote, setActiveNote] = useState<number>(0)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onGetNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onAddNote = (note: Note) => {
    setNotes([...notes,
    {
      id: note.id,
      title: note.title,
      content: note.content,
      lastModified: note.lastModified
    }])
    setActiveNote(note.id);
  }

  const onUpdateNote = (newNote: Omit<Note, "id">) => {
    const updateNotes = notes.map((note) => {
      if (note.id === activeNote) {
        return newNote;
      }
      return note;
    })
    setNotes(updateNotes);
  }

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <AppContext.Provider value={{
      notes,
      setNotes,
      onGetNote,
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