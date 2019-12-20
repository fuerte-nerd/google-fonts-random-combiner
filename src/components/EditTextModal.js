import React from "react";
import { connect } from "react-redux";
import { updateText, toggleModal } from "../redux/actions";
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

function EditTextModal(props) {
  const toggle = () => {
    props.dispatch(toggleModal("editText"));
  };

  const handleChange = e => {
    props.dispatch(
      updateText(e.target.value, e.target.getAttribute("section"))
    );
  };
  return (
    <div>
      <Modal isOpen={props.editTextModalIsOpen} toggle={toggle}>
        <ModalHeader>Edit Text</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="text-heading">Heading Text</Label>
            <Input
              id="text-heading"
              type="text"
              section="heading"
              value={props.headingText}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="text-body">Body text</Label>
            <Input
              id="text-body"
              type="textarea"
              section="body"
              value={props.bodyText}
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  editTextModalIsOpen: state.uI.modals.editText.isOpen,
  headingText: state.data.text.heading,
  bodyText: state.data.text.body
});
export default connect(mapStateToProps)(EditTextModal);
