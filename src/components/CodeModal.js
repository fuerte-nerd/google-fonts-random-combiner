import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../redux/actions";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormGroup,
  Label
} from "reactstrap";

function CodeModal(props) {
  const toggle = () => {
    props.dispatch(toggleModal("code"));
  };
  return (
    <Modal isOpen={props.codeModalIsOpen} toggle={toggle}>
      <ModalHeader>Get the code!</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="head-link">
            Copy/Paste this into the head section of your HTML document...
          </Label>
          <Input type="textarea" id="head-link" value={props.link} readOnly />
        </FormGroup>
        <FormGroup>
          <Label for="css">Copy/Paste this into your CSS...</Label>
          {props.currentFonts.heading.font && props.currentFonts.body.font ? (
            <Input
              type="textarea"
              id="css"
              value={`font-family: '${props.currentFonts.heading.font.family}';\nfont-family: '${props.currentFonts.body.font.family}';`}
              readOnly
            />
          ) : null}
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" action="toggle" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}

const mapStateToProps = state => ({
  codeModalIsOpen: state.uI.modals.code.isOpen,
  link: `https://fonts.googleapis.com/css?family=${state.data.currentFonts.heading.link}|${state.data.currentFonts.body.link}`,
  currentFonts: state.data.currentFonts
});
export default connect(mapStateToProps)(CodeModal);