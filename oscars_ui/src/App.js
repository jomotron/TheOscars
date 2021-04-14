/* import logo from "./logo.svg"; */
import oscarLogo from "./oscar.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Oscars</h1>
        <img src={oscarLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
