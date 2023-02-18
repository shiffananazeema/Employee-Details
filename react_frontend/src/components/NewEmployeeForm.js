import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

class NewEmployeeForm extends React.Component{

    state = {
        id: 0,
        name: "",
        email: "",
        phone: "",
        department: "",
        salary: ""
    };

    componentDidMount() {
        if (this.props.employee){
            const { id, name, email, phone, department, salary } = this.props.employee;
            this.setState({ id, name, email, phone, department, salary});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    createEmployee = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editEmployee = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.id, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render(){
        return (
            <Form onSubmit={this.props.employee ? this.editEmployee : this.createEmployee}>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input 
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.name)}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email: </Label>
                    <Input 
                    type="text"
                    name="email"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.email)}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone: </Label>
                    <Input 
                    type="text"
                    name="phone"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.phone)}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="department">Department: </Label>
                    <Input 
                    type="text"
                    name="department"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.department)}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="salary">Salary: </Label>
                    <Input 
                    type="text"
                    name="salary"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.salary)}>
                    </Input>
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}
export default NewEmployeeForm;