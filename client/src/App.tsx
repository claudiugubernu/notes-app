import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import MarkdownInfo from "./components/MarkdownInfo/MarkdownInfo";
import { useState } from "react";

function App() {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const onToggleModal = () => {
    setToggleModal((prev) => !prev);
  }

  return (
    <div className="App flex m-flex-column">
      <Sidebar />
      <Main />
      <MarkdownInfo onToggleModal={onToggleModal} toggleModal={toggleModal} />
      <div className='m-0 info-btn' onClick={onToggleModal}><span>i</span></div>
    </div>
  );
}

export default App;
