export interface Note {
  id?: number;
  title: string;
  content: string;
}

export type AppContextType = {
  notes: Note[];
};
