import { FC } from 'react'
import Button from '../Button/Button'

const Note: FC = () => {
  return (
    <li className='note flex justify-between align-items-center mv-30'>
      <p className='note--title c-secondary m-0'>My note</p>
      <Button variant={'button--delete'} label={'x'} />
    </li>
  )
}

export default Note