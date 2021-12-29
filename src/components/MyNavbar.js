import React, { useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";
import styles from "./MyNavbar.scss";

const MyNavbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <Navbar dark expand="md" className={styles.navbar} fixed="top">
      <NavbarBrand href="/">cook this, not that!</NavbarBrand>
      <NavbarToggler onClick={() => setIsNavCollapsed(!isNavCollapsed)} />
      <Collapse isOpen={!isNavCollapsed} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/recipes">recipe list</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/addrecipe">add a recipe</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
