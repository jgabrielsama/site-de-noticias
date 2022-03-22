import React, { useState, useEffect } from "react";

function App() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    const fetchArtigos = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.REACT_APP_API_KEY}`
        );
        const artigos = await res.json();
        // console.log(artigos.response.docs);
        setArtigos(artigos.response.docs);
      } catch (error) {
        return;
      }
    };
    fetchArtigos();
  }, []);

  return (
    <div>
      {artigos.map(artigo => {
        const {
          _id,
          abstract,
          headline: { main },
          lead_paragraph,
        } = artigo;

        return (
          <div key={_id}>
            <h2>{main}</h2>
            <h4>{abstract}</h4>
            <p>{lead_paragraph}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
