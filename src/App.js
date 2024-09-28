import './App.css';
import Hello from './Hello.js';
import Input from './Input.js';
import Label from './Label.js';
import logo from './logo.svg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <Input />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Label />
      </header>
    </div>
  );
}

export default App;
