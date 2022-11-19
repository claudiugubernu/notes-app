import { FC, useContext } from 'react'
import Note from '../Note/Note'
import { AppContext } from '../../context/AppContext';
import { AppContextType } from '../../@types/models';

const Notelist: FC = () => {
  const { notes } = useContext(AppContext) as AppContextType
  return (
    <ul className='note-list'>
      {notes.map(note =>
        <Note key={note.id} note={note} />
      )}
    </ul>
  )
}

export default Notelist