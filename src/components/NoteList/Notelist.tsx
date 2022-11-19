import { FC } from 'react'
import Note from '../Note/Note'

const Notelist: FC = () => {
  return (
    <ul className='note-list'>
      <Note />
      <Note />
      <Note />
      <Note />
    </ul>
  )
}

export default Notelist