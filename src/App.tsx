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
      <Sidebar onToggleModal={onToggleModal} />
      <Main />
      <MarkdownInfo onToggleModal={onToggleModal} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
