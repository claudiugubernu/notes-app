import Button from "../Button/Button"
import userImg from '../../assets/icons/user-icon.svg'

const Navbar = () => {
  return (
    <section className="navbar m-m-0 m-p-0 site-width">
      <Button
        label={'Login'}
        variant={'button--link '}
      />
      <div className="">
        <p className="fs-14 m-0">Hi, username</p>
        <div className="sign-out flex gap-5 align-items-end">
          <img src={userImg} alt="Username icon" width="14px" height="14px" />
          <Button
            label={'Logout'}
            variant={'button--link '}
          />
        </div>
      </div>
    </section>
  )
}

export default Navbar