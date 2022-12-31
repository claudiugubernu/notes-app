import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import MarkdownInfo from "./components/MarkdownInfo/MarkdownInfo";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [showUserModal, setShowUserModal] = useState<boolean>(false);
  const [toggleUserModal, setToggleUserModal] = useState<string>('login')

  const onToggleModal = () => {
    setToggleModal((prev) => !prev);
  }

  const onShowUserModal = () => {
    setShowUserModal((prev) => !prev);
  }

  const onToggleUserModal = (mode: string) => {
    setToggleUserModal(mode);
  }

  return (
    <div className="App flex m-flex-column">
      <Sidebar onShowUserModal={onShowUserModal} />
      <Main />
      <MarkdownInfo onToggleModal={onToggleModal} toggleModal={toggleModal} />
      <div className='m-0 info-btn' onClick={onToggleModal}><span>i</span></div>
      <Modal showUserModal={showUserModal} onShowUserModal={onShowUserModal} toggleUserModal={toggleUserModal} onToggleUserModal={onToggleUserModal} />
    </div>
  );
}

export default App;
