import React from "react";
import { Card, CardBody, CardTitle, CardText, Spinner } from "reactstrap";
import { NavLink } from "reactstrap";

import Banner from "./Banner";

function App({ loading, artigos }) {
  return (
    <div>
      {loading ? (
        artigos.map((artigo, i) => {
          const {
            _id,
            abstract,
            headline: { main },
            word_count,
          } = artigo;
          return (
            <div key={_id} style={{ margin: "15px" }}>
              {i === 4 ? <Banner /> : null}
              <Card style={{ width: "45em" }}>
                <CardBody>
                  <CardTitle tag="h5">
                    <NavLink href={`/noticia/${word_count}`}>{main}</NavLink>
                  </CardTitle>
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
