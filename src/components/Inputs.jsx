import React from "react";
const Inputs = ({ query, setQuery, explainJSON, setExplainJSON, explainTree, setExplainTree }) => {

    return (
        <div className="flex flex-col ml-10 mr-10 justify-center">
            <div className="flex space-x-10 mb-6">
                <div className="flex flex-col flex-1">
                    <label htmlFor="queryInput" className="mb-2 font-semibold text-lg">Consulta SQL</label>
                    <textarea
                        id="queryInput"
                        className="h-66 border rounded p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

        
                <div className="flex flex-col flex-1">
                    <label htmlFor="jsonInput" className="mb-2 font-semibold text-lg">Salida JSON</label>
                    <textarea
                        id="jsonInput"
                        className="h-66 border rounded p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        value={explainJSON}
                        onChange={(e) => setExplainJSON(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <label htmlFor="treeInput" className="mb-2 font-semibold w-1/2 text-lg">EXPLAIN FORMAT = TREE (opcional)</label>
                <textarea
                    id="treeInput"
                    className="w-1/2 h-66 border rounded p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize:none"
                    value={explainTree}
                    onChange={(e) => setExplainTree(e.target.value)}
                />      
            </div>
        </div>

    )
}

export default Inputs