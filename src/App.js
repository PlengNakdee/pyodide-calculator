import { useEffect, useState } from 'react';
import script from './python/main.py';
import { runPyodide } from './pyodide';
import './App.css';

function App() {
  // const [x, setX] = useState(0)
  // const [y, setY] = useState(0)
  const [output, setOutput] = useState("(loading...)");

  useEffect(() => {
    const run = async () => {
      const scriptText = await (await fetch(script)).text();
      const out = await runPyodide(scriptText);
      setOutput(out);
    }
    run();

  }, []);

  return (
    <div className="App">
      <h1>Calculate using Python in WebAssembly</h1>
      {/* <input type="number" id="number" placeholder="Enter a number" />
      <button id="calculate">Calculate</button> */}
      {/* <p id="result"></p> */}
      {/* <input id="numX"/>
      <input id="numy"/> */}
      <p>
          5 + 7 = {output}
      </p>
    </div>
  );
}

export default App;
