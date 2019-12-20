import React from "react";
import { connect } from "react-redux";
import { toggleLock } from "../redux/actions";
import { Button } from "reactstrap";

function LockButtons(props) {

    const handleClick = (e)=>{
    props.dispatch(toggleLock(e.target.getAttribute('section')))
    }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: ".1rem"
      }}
    >
      <Button
        block
        color={props.headingLocked ? "danger" : "success"}
        size="sm"
        section="heading"
        onClick={handleClick}
      >
        {props.headingLocked ? "Heading Locked" : "Heading Unlocked"}
      </Button>
      <Button
        block
        className="m-0"
        color={props.bodyLocked ? "danger" : "success"}
        size="sm"
        section="body"
        onClick={handleClick}
      >
        {props.bodyLocked ? "Body Locked" : "Body Unlocked"}
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  headingLocked: state.data.currentFonts.heading.locked,
  bodyLocked: state.data.currentFonts.body.locked
});
export default connect(mapStateToProps)(LockButtons);
