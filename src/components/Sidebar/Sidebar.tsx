import { FC } from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

const Sidebar: FC = () => {
  return (
    <aside className='sidebar w-30 m-w-100 bg-primary-dark flex flex-column m-justify-start pl-20 pr-20 pv-20'>
      <div className='sidebar--header w-100 flex justify-between align-self-center'>
        <Logo />
        <Button label={'Add'} />
      </div>
      <div className='sidebar--body'>
      </div>
    </aside>
  )
}

export default Sidebar