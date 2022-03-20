import "./App.css";
import { Buttons } from "./Component/Buttons";
import { Display } from "./Component/Display";
import { Title } from "./Component/Title";

function App() {
  return (
    <div className="wrapper">
      <Title />
      <div className="mainParent">
        {/* <!-- !--display area --  --> */}
        <Display />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
