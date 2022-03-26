import React from "react";
import { Card, CardBody, CardTitle, CardText, Spinner } from "reactstrap";

import { NavLink } from "reactstrap";
import banner from "./Minimalist Black Friday Promotional Discount Banner.gif";

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
            <div key={_id}>
              {i === 4 ? (
                <div style={{ margin: "15px" }}>
                  <a href="/">
                    <img width="50%" src={banner} alt="banner" />
                  </a>
                </div>
              ) : null}
              <Card style={{ width: "45em", margin: "15px" }}>
                <CardBody>
                  <CardTitle tag="h5">
                    <NavLink href={word_count}>{main}</NavLink>
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
