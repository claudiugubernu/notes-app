import { FC } from 'react'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ label, variant }) => {
  return (
    <button className={`button ${variant}`}>{label}</button>
  )
}

export default Button