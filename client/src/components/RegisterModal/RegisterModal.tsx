import Button from "../Button/Button"

interface Props {
  onToggleUserModal: (mode: string) => void;
}

const RegisterModal = ({ onToggleUserModal }: Props) => {
  return (
    <div className="register-modal">
      <p className="modal--title fs-30 text-center m-0">REGISTER</p>
      <form className="form">
        <div className="form--row">
          <input type="text" id="fullName" className="text-field" placeholder=" " required />
          <label className="text-field-label" htmlFor="fullName">Full Name</label>
        </div>
        <div className="form--row">
          <input type="email" id="email" className="text-field" placeholder=" " required />
          <label className="text-field-label" htmlFor="email">Email</label>
        </div>
        <div className="form--row">
          <input type="password" id="password" className="text-field" placeholder=" " required />
          <label className="text-field-label" htmlFor="password">Password</label>
        </div>
        <Button
          label="Login"
          variant="button--primary"
        />
      </form>
      <div className="flex justify-center align-center">
        <p className="fs-12 text-center mr-5 mt-0 mb-0">Have an account already? </p>
        <Button
          label={'Login now'}
          variant={'button--link fs-12 td-underline'}
          onClick={() => onToggleUserModal('login')}
        />
      </div>
    </div>
  )
}

export default RegisterModal