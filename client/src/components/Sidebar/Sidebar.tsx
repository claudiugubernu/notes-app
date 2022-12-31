import { useContext } from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Notelist from '../NoteList/Notelist'
import { AppContext } from '../../context/AppContext'
import { AppContextType } from '../../@types/models'
import Navbar from '../Navbar/Navbar'

const Sidebar = () => {
  const { onAddNote } = useContext(AppContext) as AppContextType;

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
      <div className='sidebar--header w-100 flex justify-between align-items-center align-self-center mb-50 m-mb-0 pl-20 pr-20'>
        <Logo />
        <Navbar />
      </div>
      <div className='sidebar--body'>
        <div className='site-width flex justify-end'>
          <Button label={'Add'} variant={'button--primary'} onClick={onHandleAddNote} />
        </div>
        <Notelist />
      </div>
    </aside>
  )
}

export default Sidebar