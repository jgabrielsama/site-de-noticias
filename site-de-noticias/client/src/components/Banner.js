import React from "react";
import { CardSubtitle } from "reactstrap";

import banner from "../assets/Minimalist Black Friday Promotional Discount Banner.gif";

export default function Banner() {
  return (
    <div>
      <CardSubtitle className="mb-1 text-muted">Publicidade:</CardSubtitle>
      <a href="/">
        <img width="50%" src={banner} alt="banner" />
        <hr />
      </a>
    </div>
  );
}
