import { useState } from "react";
import axios from "axios";

export const ApiService = () => {
  const [query, setQuery] = useState("");
  const [version, setVersion] = useState("8.0.32");
  const [explainJSON, setExplainJSON] = useState("");
  const [explainTree, setExplainTree] = useState("");
  const [urlResult, setUrlResult] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async () => {
    if (!query.trim() || !explainJSON.trim()) {
      alert("Debes ingresar tanto el query como el EXPLAIN FORMAT=JSON (como string).\nEstos campos son obligatorios.");
      return;
    }
    setLoading(true); 
    try {
      const res = await axios.post("https://api.mysqlexplain.com/v2/explains", {
        query,
        version,
        explain_json: explainJSON,
        explain_tree: explainTree || "",
      });
      setUrlResult(res.data.url);
      console.log(res.data.url);
    } catch (error) { 
        if (error.response && (error.response.status === 422 || error.response.status === 400)) {
          const errorData = error.response.data; 
          let mensaje = errorData.errors?.map(e => `• ${e.attribute}: ${e.message}`)?.join("\n") || "";
          if (errorData.error && errorData.message){
            mensaje += `${errorData.error}: ${errorData.message}`;
          }
          alert("Errores encontrados:\n" + mensaje);
        }
    } finally{
      setLoading(false); 
    }
  };

  const cleanForm = () => {
    setQuery(""); 
    setExplainJSON(""); 
    setExplainJSON(""); 
    setExplainTree(""); 
    setUrlResult(null); 
  }; 

  return {
    query, setQuery,
    version, setVersion,
    explainJSON, setExplainJSON,
    explainTree, setExplainTree,
    urlResult, setUrlResult,
    loading, setLoading,
    handleSubmit,
    cleanForm
  };
};

