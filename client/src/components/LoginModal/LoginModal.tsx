import Button from "../Button/Button"

const LoginModal = () => {
  return (
    <div className="login-modal">
      <p className="modal--title fs-30 text-center m-0">LOGIN</p>
      <div className="flex justify-center align-center">
        <p className="fs-12 text-center mr-5 mt-0 mb-0">No Account? </p>
        <Button
          label={'Register now'}
          variant={'button--link fs-12'}
        />
      </div>
    </div>
  )
}

export default LoginModal