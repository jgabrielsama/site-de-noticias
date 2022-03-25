import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "reactstrap";
import banner from "./Minimalist Black Friday Promotional Discount Banner.gif";

export default function NoticiaCompleta({ artigos }) {
  const [artigo, setArtigo] = useState();
  const param = parseInt(useParams().pagina);

  useEffect(() => {
    setArtigo(artigos.find(e => e.word_count === param));
  }, [artigos, param]);

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
          <h6>{artigo.lead_paragraph}</h6>
          <b>{artigo.byline.original}</b>
          <hr />
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
          <hr />
          <div style={{ margin: "15px" }}>
            <a href="/">
              <img width="50%" src={banner} alt="banner" />
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate
            natus reprehenderit ratione perferendis blanditiis! Non et, sunt suscipit
            ducimus error placeat aliquam exercitationem sint dolor ex, eaque beatae
            eos. Aperiam obcaecati nesciunt accusamus voluptate odio consequuntur
            optio suscipit vel beatae vitae dolor aspernatur, quasi corporis
            consequatur, dolores enim reiciendis sit. Alias iure commodi dolore
            recusandae! Fuga facilis fugit odio. Id necessitatibus magnam accusamus
            earum in asperiores alias explicabo nostrum. Non eius, eligendi, adipisci
            praesentium reprehenderit consectetur id, animi facilis quae unde cum!
            Sint molestiae amet fuga dolorem quos et!
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
