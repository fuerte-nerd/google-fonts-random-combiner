import React, { useState } from "react";
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

export default function CodeModal(props) {
  return (
    <Modal isOpen={props.state.codeModalIsOpen} toggle={props.toggleModal}>
      <ModalHeader>Get the code!</ModalHeader>
      <ModalBody>
        <FormGroup>
            <Label for="head-link">Copy/Paste this into the head section of your HTML document...</Label>
            <Input
              type="textarea"
              id="head-link"
              value={`https://fonts.googleapis.com/css?family=${props.state.currentFonts.heading.link}|${props.state.currentFonts.body.link}`}
              readOnly
            />
        </FormGroup>
        <FormGroup>
            <Label for="css">Copy/Paste this into your CSS...</Label>
            <Input
              type="textarea"
              id="css"
              value={`font-family: '${props.state.currentFonts.heading.font.family}';\nfont-family: '${props.state.currentFonts.body.font.family}';`}
              readOnly
            />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={props.toggleModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
