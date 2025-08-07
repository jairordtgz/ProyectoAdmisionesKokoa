import React from "react";

const Graph = ({ explainUrl }) => {
  const embedUrl = explainUrl.replace(
    "https://mysqlexplain.com/explain/",
    "https://embed.mysqlexplain.com/explain/"
  );

  return (
    <div style={{ marginTop: 20 }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
        title="MySQL Explain Visual"
        style={{border: "3px solid #14213d", borderRadius: "8px"}}
      />
    </div>
  );
};

export default Graph;