import React from "react";
import { connect } from "react-redux";
import { toggleModal, hideSection } from "../redux/actions";
import { Button, Nav, NavItem, NavLink } from "reactstrap";

function Heading(props) {
  const handleClick = e => {
    // send to togglemodal
    switch (e.target.id) {
      case "refresh":
        if(!props.currentFonts.heading.locked){
        props.dispatch(hideSection('heading', true))
        props.randomFontGetter('heading')
        }
        if(!props.currentFonts.body.locked){
          props.dispatch(hideSection('body', true))
          props.randomFontGetter('body')
        }
        
        break;
      case "get-code":
        props.dispatch(toggleModal("code"));
        break;
      case "edit-text":
        props.dispatch(toggleModal("editText"));
    }
  };
  return (
    <header className="text-center pt-4">
      <h1 style={{ fontSize: "2rem" }}>Google Fonts Random Combiner</h1>

      <Nav horizontal="center">
        <NavItem>
          <NavLink>
            <Button
              color="primary"
              size="sm"
              id="refresh"
              onClick={handleClick}
            >
              Change font(s)
            </Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Button
              color="secondary"
              size="sm"
              id="edit-text"
              onClick={handleClick}
            >
              Edit text
            </Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Button color="info" size="sm" id="get-code" onClick={handleClick}>
              Get the code
            </Button>
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  );
}

const mapStateToProps = state => ({
  data: state.data.data,
  currentFonts: state.data.currentFonts
});

export default connect(mapStateToProps)(Heading);
