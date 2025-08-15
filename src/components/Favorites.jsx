import React from "react";

function Favorites({ favorites, onRemove }) {
  if (favorites.length === 0) {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Consultas y grafos favoritos</h2>
        <p className="text-gray-500">No tienes favoritos aún.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 relative bg-[#FCF2E8] rounded-lg overflow-hidden shadow">
      <h2 className="text-xl font-semibold mb-4">⭐ Consultas y grafos favoritos</h2>
      <div className="overflow-x-auto">
        <table className="border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Consulta</th>
              <th className="border px-4 py-2 text-left">Ver grafo</th>
              <th className="border px-4 py-2 text-left">Acción</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((fav, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="border px-4 py-2 whitespace-pre-wrap">{fav.query}</td>
                <td className="border px-4 py-2">
                  <a
                    href={fav.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Abrir grafo ↗
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => onRemove(idx)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Quitar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Favorites;
