import React from "react";
import { connect } from "react-redux";
import { togglePicker, changeColor } from "../redux/actions";
import { Button } from "reactstrap";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

function ColorButtons(props) {
  const handleClick = e => {
    props.dispatch(togglePicker(e.target.getAttribute("section")));
  };

  const handleBgChange = color => {
    props.dispatch(changeColor("background", color.hex));
  };
  const handleTextChange = color => {
    props.dispatch(changeColor("text", color.hex));
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "1px"
      }}
    >
      <div style={{ position: "relative" }}>
        <Button block size="sm" section="background" onClick={handleClick}>
          {props.bgPickerIsShowing
            ? "Close Background Palette"
            : "Open Background Palette"}{" "}
          <FontAwesomeIcon icon={faPalette} />
        </Button>
        {props.bgPickerIsShowing ? (
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <ChromePicker
              disableAlpha
              color={props.bgColor}
              onChange={handleBgChange}
            />
          </div>
        ) : null}
      </div>
      <div style={{ position: "relative" }}>
        <Button block size="sm" section="text" onClick={handleClick}>
          {props.textPickerIsShowing
            ? "Close Text Palette"
            : "Open Text Palette"}{" "}
          <FontAwesomeIcon icon={faPalette} />
        </Button>
        {props.textPickerIsShowing ? (
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          >
            <ChromePicker
              disableAlpha
              color={props.textColor}
              onChange={handleTextChange}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  bgPickerIsShowing: state.uI.colorPickers.background,
  textPickerIsShowing: state.uI.colorPickers.text,
  bgColor: state.uI.colors.background,
  textColor: state.uI.colors.text
});
export default connect(mapStateToProps)(ColorButtons);
