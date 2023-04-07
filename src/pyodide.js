export const runPyodide = async (code) => {
    const pyodide = await window.loadPyodide({
      indexURL : "https://cdn.jsdelivr.net/pyodide/v0.23.0/full/"
    });
  
    return await pyodide.runPythonAsync(code);
  }