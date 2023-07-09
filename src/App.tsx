import logo from "./assets/logo.png";
import Demo from "./components/Demo";

function App() {
  return (
    <div className="container">
      <img alt="" className="logo" height="92px" src={logo} />
      <Demo />
    </div>
  );
}

export default App;
