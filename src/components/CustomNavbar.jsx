import { NavLink as ReactLink } from "react-router-dom";

import React, { useState, useEffect } from "react";

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
  Button

} from "reactstrap";

const CustomNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // DARK MODE STATE
  const [darkMode, setDarkMode] = useState(

    localStorage.getItem("darkMode") === "true"

  );

  // APPLY DARK MODE
  useEffect(() => {

    if (darkMode) {

      document.body.style.background = "#121212";

      document.body.style.color = "white";
    }
    else {

      document.body.style.background = "white";

      document.body.style.color = "black";
    }

    localStorage.setItem("darkMode", darkMode);

  }, [darkMode]);

  // TOGGLE DARK MODE
  const toggleDarkMode = () => {

    setDarkMode(!darkMode);

  };

  const logout = () => {

  localStorage.removeItem("isLoggedIn");

  window.location.href = "/login";
};

  return (

    <div>

      <Navbar
        color="info"
        light
        expand="md"
        style={{
          padding: "14px 25px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
        }}
      >

        <NavbarBrand
          tag={ReactLink}
          to="/home"
          style={{
            fontWeight: "bold",
            fontSize: "26px"
          }}
        >
          🌍 BlogSphere
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="me-auto" navbar>

            <NavItem>

              <NavLink tag={ReactLink} to="/home">

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

            <NavItem>
  <NavLink tag={ReactLink} to="/profile">
    Profile
  </NavLink>
</NavItem>

<UncontrolledDropdown nav inNavbar>

  <DropdownToggle nav caret>

    Explore

  </DropdownToggle>

  <DropdownMenu end>

    <DropdownItem tag={ReactLink} to="/home">

      📚 All Posts

    </DropdownItem>

    <DropdownItem tag={ReactLink} to="/create">

      ✍ Write Blog

    </DropdownItem>

    <DropdownItem tag={ReactLink} to="/bookmarks">

      🔖 Bookmarks

    </DropdownItem>

    <DropdownItem onClick={logout}>

      🚪 Logout

    </DropdownItem>

  </DropdownMenu>

</UncontrolledDropdown>

          </Nav>

          {/* DARK MODE BUTTON */}
          <Button
            color={darkMode ? "light" : "dark"}
            onClick={toggleDarkMode}
            style={{
              marginRight: "20px",
              borderRadius: "10px",
              fontWeight: "bold"
            }}
          >

            {darkMode ? "☀ Light" : "🌙 Dark"}

          </Button>

          <NavbarText
            style={{
              fontWeight: "bold"
            }}
          >
            🚀 Modern Blogging Platform
          </NavbarText>

        </Collapse>

      </Navbar>

    </div>
  );
};

export default CustomNavbar;