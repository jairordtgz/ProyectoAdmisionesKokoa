import React, { useState } from "react";
import Graph from "./components/Graph";
import { ApiService } from "./services/ApiService";
import NavBar from "./components/NavBar";
import Inputs from "./components/Inputs";
import Favorites from "./components/Favorites";
import "./index.css";
import "./Spinner.css"
function App() {
  const {
    query, setQuery,
    version, setVersion,
    explainJSON, setExplainJSON,
    explainTree, setExplainTree,
    urlResult, handleSubmit,
    loading, setLoading,
    cleanForm
  } = ApiService();

  const [favorites, setFavorites] = useState([]);

  const exists = favorites.some(
    fav => JSON.stringify(fav.explainJSON) === JSON.stringify(explainJSON)
  );

  const addFavorite = () => {
    if (!query || !urlResult || exists) return;
    setFavorites([...favorites, { query, url: urlResult, explainJSON }]);
  };


  const removeFavorite = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

return (
    <div>
      <NavBar />

      {/* Contenedor principal de dos columnas */}
      <div className="px-4 mt-6 flex gap-6">
        {/* Columna izquierda */}
        <div className="flex-1 basis-7/10">
          <input
            type="text"
            placeholder="Versión MySQL"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="mb-4 border px-2 py-1 rounded w-[300px]"
          />

          <Inputs
            query={query}
            setQuery={setQuery}
            explainJSON={explainJSON}
            setExplainJSON={setExplainJSON}
            explainTree={explainTree}
            setExplainTree={setExplainTree}
          />

          <div className="flex flex-row justify-center my-6">
            <button
              className="bg-[#0c2041] text-white px-10 py-3 border rounded shadow-lg"
              onClick={handleSubmit}
            >
              {loading ? "Cargando..." : "Generar Grafo"}
            </button>
            {urlResult && (
              <button
                className="bg-[#0c2041] text-white px-10 py-3 border rounded shadow-lg"
                onClick={cleanForm}
              >
              Limpiar 🧹
              </button>
            )}

          </div>



          {loading && (
            <div className="flex justify-center my-4">
              <span className="loader"> </span>
            </div>
          )}

          {urlResult && !loading &&(
            <div style={{ marginTop: 30 }}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Resultado:</h4>
                <button
                  onClick={addFavorite}
                  disabled={exists}
                  className={`bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 transition ${
                    exists ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-yellow-400 text-black hover:bg-yellow-500"    

                  }`}
                >
                  ⭐ Añadir a favoritos
                </button>
              </div>
              {/* <a href={urlResult} target="_blank" rel="noreferrer">
                Ver en pestaña nueva ↗️
              </a> */}
              <Graph explainUrl={urlResult} />
            </div>
          )}

          
        </div>

        {/* Columna derecha */}
        <div className="flex-1 basis-3/10">
          <Favorites favorites={favorites} onRemove={removeFavorite} />
        </div>

      </div>
    </div>
  );
}

export default App;


//logo de pestaña y nombre OK
// poner favoritos a la derecha OK 
// añadir un cargando... OK 
// en el caso de imagenes poner que ya esta cargado, en el boton de añadir a favorito
// si ya esta cargado añadirle un bloqueo al pasar el mouse  OK