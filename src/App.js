import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calculate using Python in WebAssembly</h1>
      <input type="number" id="number" placeholder="Enter a number" />
      <button id="calculate">Calculate</button>
      <p id="result"></p>
    </div>
  );
}

export default App;
