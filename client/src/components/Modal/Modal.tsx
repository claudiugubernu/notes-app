import LoginModal from '../LoginModal/LoginModal'
import RegisterModal from '../RegisterModal/RegisterModal'

interface Props {
  showUserModal: boolean;
  toggleUserModal: string;
  onToggleUserModal: (mode: string) => void;
  onShowUserModal: () => void;
}

const Modal = ({ showUserModal, onShowUserModal, toggleUserModal, onToggleUserModal }: Props) => {
  return (
    <div className={showUserModal ? 'modal active' : 'modal'}>
      <div className='modal--blur-layer' onClick={onShowUserModal}></div>
      {
        toggleUserModal === 'login' ? (
          <div className="modal--inner">
            <LoginModal onToggleUserModal={onToggleUserModal} />
          </div>
        ) : (
          <div className="modal--inner">
            <RegisterModal onToggleUserModal={onToggleUserModal} />
          </div>
        )
      }
    </div>
  )
}

export default Modal