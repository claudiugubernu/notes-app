import React, { createContext, useState } from 'react'
import { AppContextType, Note } from '../@types/models'

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([])
  const [activeNote, setActiveNote] = useState<number>(0)

  return (
    <AppContext.Provider value={{ notes }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider