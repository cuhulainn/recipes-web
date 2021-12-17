import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const MyNavbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <Navbar
        color="info"
        dark
        expand="md"
        style={{ paddingLeft: "4vw", paddingRight: "4vw" }}
      >
        <NavbarBrand href="/">cook this, not that!</NavbarBrand>
        <NavbarToggler onClick={() => setIsNavCollapsed(!isNavCollapsed)} />
        <Collapse isOpen={!isNavCollapsed} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recipes">Recipe List</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
