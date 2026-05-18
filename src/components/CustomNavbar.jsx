import { NavLink as ReactLink} from "react-router-dom";
import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand tag={ReactLink} to="/">
          Simple Blogs
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>

            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/create">
                Create Post
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Explore
              </DropdownToggle>

              <DropdownMenu end>
                <DropdownItem tag={ReactLink} to="/">
                  All Posts
                </DropdownItem>
                <DropdownItem tag={ReactLink} to="/create">
                  Write Blog
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>
                  More coming soon
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>

          <NavbarText>Mini Blogging App</NavbarText>

        </Collapse>
      </Navbar>
    </div>
  );
};
export default CustomNavbar;