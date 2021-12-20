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
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/recipes">Recipe List</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
