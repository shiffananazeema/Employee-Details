import React, { Component } from "react";
import { Table } from "reactstrap";
import NewEmployeeModal from "./NewEmployeeModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class EmployeeList extends Component {
  render() {
    const employees = this.props.employees;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Joining</th>
            <th>Department</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!employees || employees.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Oops, no ones here yet</b>
              </td>
            </tr>
          ) : (
            employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.dateofjoining}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td align="center">
                  <NewEmployeeModal
                    create={false}
                    employee={employee}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={employee.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default EmployeeList;