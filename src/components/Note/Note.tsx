import { FC } from 'react'
import Button from '../Button/Button'

const Note: FC = () => {
  return (
    <li className='note flex justify-between align-items-start mv-30'>
      <div>
        <p className='note--title fs-24 c-secondary fw-bold m-0 mb-5'>My note</p>
        <p className='note--preview m-0 mb-10 sm-hide-down'>Note preview</p>
        <small className='note--meta c-dark-grey '>
          Last modified [date]
        </small>
      </div>
      <Button variant={'button--delete'} label={'x'} />
    </li>
  )
}

export default Note