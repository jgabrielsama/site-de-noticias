import React from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

import iconeDeNoticias from "../assets/noticias.png";

export default function Header() {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <Link style={{ textDecoration: "none" }} to="/">
          <img src={iconeDeNoticias} width="37" alt="icone" />
        </Link>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Homepage</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contato">Contato</NavLink>
            </NavItem>
          </Nav>
          <NavbarText style={{ fontSize: "13px" }}>
            Site de notícias feito com o API do nytimes
          </NavbarText>
        </Collapse>
      </Navbar>
      <br />
    </div>
  );
}
