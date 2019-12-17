import React from "react";
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

export default function EditTextModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.state.editTextModalIsOpen}
        toggle={props.toggleModal}
      >
        <ModalHeader>Edit Text</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="text-heading">Heading Text</Label>
            <Input
              id="text-heading"
              type="text"
              section="heading"
              value={props.state.text.heading}
              onChange={props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="text-body">Body text</Label>
            <Input
              id="text-body"
              type="textarea"
              section="body"
              value={props.state.text.body}
              onChange={props.handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={props.toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
