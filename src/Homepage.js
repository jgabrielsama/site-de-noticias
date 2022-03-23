import React from "react";
import { Card, CardBody, CardTitle, CardText, Spinner } from "reactstrap";

import { NavLink } from "reactstrap";

function App({ loading, artigos }) {
  return (
    <div>
      {loading ? (
        artigos.map(artigo => {
          const {
            _id,
            abstract,
            headline: { main },
            multimedia,
            word_count,
          } = artigo;
          // const imagem = `https://www.nytimes.com/${multimedia[0].url}`;
          return (
            <div key={_id}>
              <Card style={{ width: "45em", margin: "15px" }}>
                {/* <CardImg alt={imagem} src={imagem} width="5px" /> */}
                <CardBody>
                  <CardTitle tag="h5">
                    <NavLink href={word_count}>{main}</NavLink>
                  </CardTitle>
                  {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {abstract}
                  </CardSubtitle>
                  <CardText>{lead_paragraph}</CardText> */}
                  <CardText>{abstract}</CardText>
                </CardBody>
              </Card>
            </div>
          );
        })
      ) : (
        <Spinner
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            margin: "60px auto",
            position: "relative",
          }}
        />
      )}
    </div>
  );
}

export default App;
