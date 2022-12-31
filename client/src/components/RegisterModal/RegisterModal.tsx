import Button from "../Button/Button"

const RegisterModal = () => {
  return (
    <div className="register-modal">
      <p className="modal--title fs-30 text-center m-0">REGISTER</p>
      <div className="flex justify-center align-center">
        <p className="fs-12 text-center mr-5 mt-0 mb-0">Have an account already? </p>
        <Button
          label={'Login now'}
          variant={'button--link fs-12'}
        />
      </div>
    </div>
  )
}

export default RegisterModal