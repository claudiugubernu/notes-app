import React from 'react';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  lastModified: number;
}

export type AppContextType = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  onGetNote: () => Note | undefined;
  onAddNote: (note: Note) => void;
  onUpdateNote: (newNote: Note) => void;
  deleteNote: (id: number) => void;
  activeNote: number;
  setActiveNote: React.Dispatch<React.SetStateAction<number>>;
  loggedIn: boolean;
};
