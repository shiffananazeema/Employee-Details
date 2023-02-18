import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import EmployeeList from "./EmployeeList";
import NewEmployeeModal from "./NewEmployeeModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.resetState();
  }

  getEmployees = () => {
    axios.get(API_URL).then(res => this.setState({ employees: res.data }));
  };

  resetState = () => {
    this.getEmployees();
  };

  render() {
    return (
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col>
            <EmployeeList
              employees={this.state.employees}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewEmployeeModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;