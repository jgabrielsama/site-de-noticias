import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Banner from "./Banner";
import NoticiaCompleta from "./NoticiaCompleta";

function App() {
  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArtigos = async () => {
      try {
        const res = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=brazil&api-key=${process.env.REACT_APP_API_KEY}`
        );
        const artigos = await res.json();
        // console.log(artigos.response.docs);
        setArtigos(artigos.response.docs);
        setLoading(true);
      } catch (error) {
        return;
      }
    };
    fetchArtigos();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage attribute={false} artigos={artigos} loading={loading} />
            }
          />
          <Route path="/:pagina" element={<NoticiaCompleta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
