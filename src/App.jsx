import React, { useState } from "react";
import Graph from "./components/Graph";
import { ApiService } from "./services/apiService";
import NavBar from "./components/NavBar";
import Inputs from "./components/Inputs";
import Favorites from "./components/Favorites";
import "./index.css";

function App() {
  const {
    query, setQuery,
    version, setVersion,
    explainJSON, setExplainJSON,
    explainTree, setExplainTree,
    urlResult, handleSubmit
  } = ApiService();

  const [favorites, setFavorites] = useState([]);

  const addFavorite = () => {
    if (!query || !urlResult) return;
    // Evitar duplicados
    const exists = favorites.some(
      fav => fav.query === query && fav.url === urlResult
    );
    
    if (!exists) {
      setFavorites([...favorites, { query, url: urlResult }]);
    }
  };

  const removeFavorite = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

  return (
    <div>
      <NavBar />

      <div className="max-w-6xl mx-auto px-4">
        <Favorites favorites={favorites} onRemove={removeFavorite} />
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6">
        <input
          type="text"
          placeholder="Versión MySQL"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          className="w-full mb-4 border px-2 py-1 rounded"
        />

        <Inputs
          query={query}
          setQuery={setQuery}
          explainJSON={explainJSON}
          setExplainJSON={setExplainJSON}
          explainTree={explainTree}
          setExplainTree={setExplainTree}
        />

        <div className="flex flex-col items-center my-6">
          <button
            className="bg-[#0c2041] text-white px-10 py-3 border rounded shadow-lg"
            onClick={handleSubmit}
          >
            Generar Grafo
          </button>
        </div>

        {urlResult && (
          <div style={{ marginTop: 30 }}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Resultado:</h4>
              <button
                onClick={addFavorite}
                className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 transition"
              >
                ⭐ Marcar como favorito
              </button>
            </div>
            <a href={urlResult} target="_blank" rel="noreferrer">
              Ver en pestaña nueva ↗️
            </a>
            <Graph explainUrl={urlResult} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


//logo de pestaña y nombre, poner favoritos a la derecha y añadir un cargando...
// en el caso de imagenes poner que ya esta cargado 