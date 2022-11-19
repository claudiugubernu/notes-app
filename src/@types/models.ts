import React, { SetStateAction } from 'react';
export interface Note {
  id: number;
  title: string;
  content: string;
  lastModified: number;
}

export type AppContextType = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  onAddNote: (note: Note) => void;
  onUpdateNote: (id: number, newNote: Omit<Note, 'id'>) => void;
  deleteNote: (id: number) => void;
  activeNote: number;
  setActiveNote: React.Dispatch<React.SetStateAction<number>>;
};
