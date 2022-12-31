import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'

interface Props {
  showUserModal: boolean;
  toggleUserModal: string;
  onToggleUserModal: () => void;
}

const Modal = ({ showUserModal, toggleUserModal, onToggleUserModal }: Props) => {
  return (
    <div className={showUserModal ? 'modal show' : 'modal'}>
      {
        toggleUserModal === 'login' ? (
          <LoginModal />
        ) : (
          <RegisterModal />
        )
      }
    </div>
  )
}

export default Modal