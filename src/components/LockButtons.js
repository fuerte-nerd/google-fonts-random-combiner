import React from "react";
import { connect } from "react-redux";
import { toggleLock } from "../redux/actions";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

function LockButtons(props) {
  const handleClick = e => {
    props.dispatch(toggleLock(e.currentTarget.getAttribute("section")));
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "1px"
      }}
    >
      <Button
        block
        color={props.headingLocked ? "danger" : "success"}
        size="sm"
        section="heading"
        onClick={handleClick}
        data-tip={
          props.headingLocked
            ? "Unlock the heading font"
            : "Lock the heading font"
        }
      >
        <div className="d-block">Heading</div>
        {props.headingLocked ? (
          <FontAwesomeIcon icon={faLock} />
        ) : (
          <FontAwesomeIcon icon={faLockOpen} />
        )}
      </Button>
      <Button
        block
        className="m-0"
        color={props.bodyLocked ? "danger" : "success"}
        size="sm"
        section="body"
        onClick={handleClick}
        data-tip={
          props.bodyLocked ? "Unlock the body font" : "Lock the body font"
        }
      >
        <div className="d-block">Body</div>
        {props.bodyLocked ? (
          <FontAwesomeIcon icon={faLock} />
        ) : (
          <FontAwesomeIcon icon={faLockOpen} />
        )}
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  headingLocked: state.data.currentFonts.heading.locked,
  bodyLocked: state.data.currentFonts.body.locked
});
export default connect(mapStateToProps)(LockButtons);
