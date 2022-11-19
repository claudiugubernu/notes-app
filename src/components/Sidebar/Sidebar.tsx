import { FC, useContext } from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Notelist from '../NoteList/Notelist'
import { AppContext } from '../../context/AppContext'
import { AppContextType } from '../../@types/models'

const Sidebar: FC = () => {
  const { onAddNote, activeNote, setActiveNote } = useContext(AppContext) as AppContextType;

  const onHandleAddNote = () => {
    onAddNote({
      id: Date.now(),
      title: 'Untitled note',
      content: '',
      lastModified: Date.now()
    })
  }

  return (
    <aside className='sidebar w-30 lg-w-40 m-w-100 bg-primary-dark flex flex-column m-justify-start pv-20'>
      <div className='sidebar--header w-100 flex justify-between align-self-center mb-50 m-mb-0 pl-20 pr-20'>
        <Logo />
        <Button label={'Add'} variant={'button--primary'} onClick={onHandleAddNote} />
      </div>
      <div className='sidebar--body'>
        <Notelist />
      </div>
    </aside>
  )
}

export default Sidebar