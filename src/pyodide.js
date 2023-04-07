async function main() {
    let pyodide = await loadPyodide();

      // Load and run the Python code
    pyodide.globals.set("square", x => x*x)
    return pyodide
  };
//   main();

pyodide = main();