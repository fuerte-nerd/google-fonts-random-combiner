import React from "react";
import { connect } from "react-redux";
import { hideSection, toggleModal } from "../redux/actions";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt, faEdit, faCode } from "@fortawesome/free-solid-svg-icons";

function MainButtons(props) {
  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "refresh":
        if (!props.currentFonts.heading.locked) {
          props.dispatch(hideSection("heading", true));
          props.randomFontGetter("heading");
        }
        if (!props.currentFonts.body.locked) {
          props.dispatch(hideSection("body", true));
          props.randomFontGetter("body");
        }

        break;
      case "get-code":
        props.dispatch(toggleModal("code"));
        break;
      case "edit-text":
        props.dispatch(toggleModal("editText"));
        break;
      default:
        break;
    }
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr"
      }}
    >
      <div>
        <Button
          block
          color="primary"
          size="lg"
          id="edit-text"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </div>
      <div>
        <Button
          block
          color="warning"
          size="lg"
          id="refresh"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faSyncAlt} />
        </Button>
      </div>
      <div>
        <Button
          block
          color="info"
          size="lg"
          id="get-code"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faCode} />
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentFonts: state.data.currentFonts
});
export default connect(mapStateToProps)(MainButtons);
