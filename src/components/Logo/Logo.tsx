import { FC } from 'react'
import LogoImg from '../../assets/img/logo.png'
import './logo.scss'

const Logo: FC = () => {
  return (
    <div className='logo'>
      <img src={LogoImg} alt='notes app logo' />
    </div>
  )
}

export default Logo