import { FC } from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Notelist from '../NoteList/Notelist'

const Sidebar: FC = () => {
  return (
    <aside className='sidebar w-40 m-w-100 bg-primary-dark flex flex-column m-justify-start pl-20 pr-20 pv-20'>
      <div className='sidebar--header w-100 flex justify-between align-self-center mb-50 m-mb-0'>
        <Logo />
        <Button label={'Add'} variant={'button--primary'} />
      </div>
      <div className='sidebar--body'>
        <Notelist />
      </div>
    </aside>
  )
}

export default Sidebar