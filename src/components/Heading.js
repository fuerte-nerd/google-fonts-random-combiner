import React from "react";
import { Button, Nav, NavItem, NavLink } from "reactstrap";

export default function Heading(props) {
  return (
    <header className="text-center pt-4">
      <h1 style={{ fontSize: "2rem" }}>Google Fonts Random Combiner</h1>

      <Nav horizontal="center">
        <NavItem>
          <NavLink>
            <Button color="primary" size="sm" id="refresh" onClick={props.click}>
              Change font(s)
            </Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Button color="secondary" size="sm" id="edit-text" onClick={props.click}>
              Edit text
            </Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Button color="info" size="sm" id="get-code" onClick={props.click}>
              Get the code
            </Button>   
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
}
