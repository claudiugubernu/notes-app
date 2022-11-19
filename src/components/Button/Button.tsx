import { FC } from 'react'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <button className='button button--primary'>{label}</button>
  )
}

export default Button