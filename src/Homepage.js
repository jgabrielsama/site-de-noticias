import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";

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
        } = artigo;
        const imagem = `https://www.nytimes.com/${multimedia[0].url}`;

        return (
          <div key={_id}>
            <Card style={{ width: "45rem", margin: "auto" }}>
              <CardImg alt={imagem} src={imagem} width="5px" />
              <CardBody>
                <CardTitle tag="h5">
                  <a href="web_url">{main}</a>
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {abstract}
                </CardSubtitle>
                <CardText>{lead_paragraph}</CardText>
              </CardBody>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
