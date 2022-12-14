import { useContext } from 'react'
import Button from "../Button/Button"
import userImg from '../../assets/icons/user-icon.svg'
import { AppContext } from "../../context/AppContext";
import { AppContextType } from "../../@types/models";

interface Props {
  onShowUserModal: () => void;
}

const Navbar = ({ onShowUserModal }: Props) => {
  const { loggedIn } = useContext(AppContext) as AppContextType;

  return (
    <section className="navbar">
      {
        !loggedIn ? (
          <Button
            label={'Login'}
            variant={'button--link '}
            onClick={onShowUserModal}
          />
        ) : (
          <div>
            <p className="fs-14 m-0">Hi, username</p>
            <div className="sign-out flex gap-5 align-items-end">
              <img src={userImg} alt="Username icon" width="14px" height="14px" />
              <Button
                label={'Logout'}
                variant={'button--link'}
              />
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Navbar