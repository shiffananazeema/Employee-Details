import React, { Component, Fragment} from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewEmployeeForm from "./NewEmployeeForm";

class NewEmployeeModal extends Component{
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    render() {
        const create = this.props.create;

        var title = "Editing Employee";
        var button = <Button onClick={this.toggle}>Edit </Button>
        if (create) {
            title = "Create New Employee";

            button = (
                <Button
                color="primary"
                className="float-right"
                onClick={this.toggle}
                style={{ minWidth: "150px"}}>
                Create New 
                </Button>
            )
        }
        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <NewEmployeeForm 
                        resetState={this.props.resetState}
                        toggle={this.toggle}
                        employee={this.props.employee}>
                        </NewEmployeeForm>
                    </ModalBody>
                </Modal>

            </Fragment>
        )
    }
}
export default NewEmployeeModal;