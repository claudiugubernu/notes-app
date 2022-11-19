import { FC } from 'react'
import { ButtonProps } from './Button.types'

const Button: FC<ButtonProps> = ({ label, variant, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>{label}</button>
  )
}

export default Button