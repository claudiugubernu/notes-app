import { FC, useContext } from 'react'
import Button from '../Button/Button'
import { NoteProps } from './Note.types'
import { AppContext } from '../../context/AppContext'
import { AppContextType } from '../../@types/models'

const Note: FC<NoteProps> = ({ note }) => {
  const { deleteNote, activeNote, setActiveNote } = useContext(AppContext) as AppContextType

  const handleOnDelete = (id: number) => {
    deleteNote(id);
  }
  return (
    <li className={activeNote === note.id ? 'note active flex justify-between align-items-start mv-20 pv-10 ph-20' : 'note flex justify-between align-items-start mv-20 pv-10 ph-20'} onClick={() => { note.id && setActiveNote(note.id) }}>
      <div>
        <p className='note--title fs-24 c-secondary fw-bold m-0 mb-5'>{note.title}</p>
        <p className='note--preview m-0 mb-10 sm-hide-down'>{note.content && note.content.substring(0, 100) + '...'}</p>
        <small className='note--meta c-dark-grey '>
          Last modified {new Date(note.lastModified).toLocaleDateString('en-GB', { hour: '2-digit', minute: '2-digit' })}
        </small>
      </div>
      <Button variant={'button--delete'} label={'x'} onClick={() => { note.id && handleOnDelete(note.id) }} />
    </li>
  )
}

export default Note