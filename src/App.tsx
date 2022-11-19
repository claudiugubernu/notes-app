import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App flex m-flex-column">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
