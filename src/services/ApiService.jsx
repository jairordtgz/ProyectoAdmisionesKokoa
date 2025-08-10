import { useState } from "react";
import axios from "axios";

export const ApiService = () => {
  const [query, setQuery] = useState("");
  const [version, setVersion] = useState("8.0.32");
  const [explainJSON, setExplainJSON] = useState("");
  const [explainTree, setExplainTree] = useState("");
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = async () => {
    if (!query.trim() || !explainJSON.trim()) {
      alert("Debes ingresar tanto el query como el EXPLAIN FORMAT=JSON (como string).\nEstos campos son obligatorios.");
      return;
    }

    try {
      const res = await axios.post("https://api.mysqlexplain.com/v2/explains", {
        query,
        version,
        explain_json: explainJSON,
        explain_tree: explainTree || "",
      });

      setUrlResult(res.data.url);
      console.log(res.data.url)
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errorData = error.response.data;
        const messages = errorData.errors?.map(e => `• ${e.attribute}: ${e.message}`)?.join("\n") || "Error de validación";
        alert("Errores encontrados:\n" + messages);
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return {
    query, setQuery,
    version, setVersion,
    explainJSON, setExplainJSON,
    explainTree, setExplainTree,
    urlResult, setUrlResult,
    handleSubmit
  };
};

