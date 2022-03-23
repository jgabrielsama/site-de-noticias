import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function NoticiaCompleta({ artigos }) {
  const [pathname, setPathname] = useState();
  const location = useLocation().pathname.slice(1);

  useEffect(() => setPathname(location), []);
  let artigo = artigos.find(e => e.word_count === 968);
  if (artigo === undefined) {
    return 0;
  }

  return <div>{artigo.abstract}</div>;
}
