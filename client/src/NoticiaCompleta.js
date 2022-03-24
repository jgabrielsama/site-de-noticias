import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "reactstrap";

export default function NoticiaCompleta({ artigos }) {
  const [artigo, setArtigo] = useState();
  const param = parseInt(useParams().pagina);
  useEffect(() => {
    setArtigo(artigos.find(e => e.word_count === param));
  }, [artigos]);
  // console.log(artigo);

  return (
    <div>
      {artigo ? (
        <div style={{ margin: "2rem" }}>
          <h1>{artigo.headline.main}</h1>
          <h5>{artigo.abstract}</h5>
          <img
            alt=""
            src={`https://www.nytimes.com/${artigo.multimedia[0].url}`}
            width="30%"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa id quod
            maxime optio molestias qui explicabo nobis similique officia laboriosam
            vitae nesciunt sequi, quam accusamus adipisci nemo asperiores,
            consectetur possimus. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Minus quam tenetur rerum, illo est harum ipsa doloremque veniam
            nobis illum sit fugit obcaecati consequatur nostrum recusandae?
            Consectetur sint officiis facere. Eos voluptas amet consectetur illum
            voluptatum ea earum dicta commodi veritatis cupiditate sequi excepturi,
            consequuntur quos molestiae reprehenderit? Nostrum quas numquam ipsum
            rerum odit commodi ipsa deleniti, excepturi sapiente distinctio?
          </p>
          <a href={artigo.web_url}>Fonte</a>
        </div>
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
