import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import VoomsLogo from "../../assets/voomsgo-alt-logo.svg";
import { ReactComponent as LuggageIcon } from "../../assets/luggage.svg";
import { ReactComponent as DeliveryIcon } from "../../assets/delivery.svg";
import "./navheader.scss";
const NavHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav id="navbar">
      <Navbar light color="" expand="lg">
        <NavbarBrand href="/">
          <img src={VoomsLogo} alt="VoomsGO logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">
                <span className="icon">
                  <LuggageIcon className="icon_fill" />
                </span>
                VoomTravel
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                <span className="icon">
                  <DeliveryIcon className="icon_fill" />
                </span>
                VoomLogistics
              </NavLink>
            </NavItem>
          </Nav>
          <div className="left-link my-2 my-lg-0">
            <a className="nav-link" href="#">
              Sign In
            </a>
            <button className="btn btn-lined light">Create Account</button>
          </div>
        </Collapse>
      </Navbar>
    </nav>
  );
};

export default NavHeader;
