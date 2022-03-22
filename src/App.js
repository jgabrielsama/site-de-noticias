import React, { useState, useEffect } from "react";

function App() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    const fetchArtigos = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=brazil&api-key=${process.env.REACT_APP_API_KEY}`
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
          multimedia,
          web_url,
        } = artigo;
        const imagem = `https://www.nytimes.com/${multimedia[0].url}`;

        return (
          <div key={_id}>
            <a style={{ fontSize: 30 }} href={web_url}>
              {main}
            </a>
            <h4>{abstract}</h4>
            <p>{lead_paragraph}</p>
            <img src={imagem} alt={imagem} width="300" />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
