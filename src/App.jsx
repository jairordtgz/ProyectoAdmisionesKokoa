// import { useState } from 'react'
// // import './App.css'
// import NavBar from './components/NavBar'
// import Inputs from './components/Inputs'
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//     <NavBar/>
//     <Inputs/>
//     </>
//   )
// }

// export default App

import React from "react";
import Graph from "./components/Graph";
import { ApiService } from "./services/apiService";
import NavBar from "./components/NavBar";
import Inputs from "./components/Inputs";
import './index.css'
function App() {
  const {
    query, setQuery,
    version, setVersion,
    explainJSON, setExplainJSON,
    explainTree, setExplainTree,
    urlResult, handleSubmit
  } = ApiService();

  return (
    <div>
      <NavBar/>


      <input
        type="text"
        placeholder="Versión MySQL"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Inputs
        query={query}
        setQuery={setQuery}
        explainJSON={explainJSON}
        setExplainJSON={setExplainJSON}
        explainTree={explainTree}
        setExplainTree={setExplainTree}
      />
      <br/>
       {/* <div className="flex flex-col items-center">
        <button className="bg-[#14213d] text-white px-6 py-1 border rounded shadow-lg animate-pulse" onClick={handleSubmit}>Generar Grafo</button>

      </div> */}

      <div className="flex flex-col items-center mb-10">
  <button 
    className="bg-[#14213d] text-white px-10 py-3 border rounded shadow-lg animate-pulse"
    onClick={handleSubmit}
  >
    Generar Grafo
  </button>
</div>

      

      {urlResult && (
        <div style={{ marginTop: 30 }}>
          <h4>Resultado:</h4>
          <a href={urlResult} target="_blank" rel="noreferrer">
            Ver en pestaña nueva ↗️
          </a>
          <Graph explainUrl={urlResult} />
        </div>
      )}
    </div>
  );
}

export default App;