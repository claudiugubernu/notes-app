import Button from "../Button/Button"

interface Props {
  onToggleUserModal: (mode: string) => void;
}

const LoginModal = ({ onToggleUserModal }: Props) => {
  return (
    <div className="login-modal">
      <p className="modal--title fs-30 text-center m-0">LOGIN</p>
      <form className="form">
        <div className="form--row">
          <input type="email" id="email" className="text-field" placeholder=" " required />
          <label className="text-field-label" htmlFor="email">Email</label>
        </div>
        <div className="form--row">
          <input type="password" id="password" className="text-field" placeholder=" " required />
          <label className="text-field-label"
            htmlFor="password">Password</label>
        </div>
        <Button
          label="Login"
          variant="button--primary"
        />
      </form>
      <div className="modal-footer flex justify-center align-center">
        <p className="fs-12 text-center mr-5 mt-0 mb-0">No Account? </p>
        <Button
          label={'Register now'}
          variant={'button--link fs-12 td-underline'}
          onClick={() => onToggleUserModal('register')}
        />
      </div>
    </div>
  )
}

export default LoginModal