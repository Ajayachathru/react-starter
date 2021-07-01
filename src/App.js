import React, { Component } from "react";
import { employees } from "./data/employees";
import {
    Jumbotron,
    Container,
    Form,
    Table,
    Button,
    Spinner,
} from "react-bootstrap";

import "./App.css";

const EmployeeRow = ({ employee, onEmployeeDelete }) => {
    return (
        <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td>
                <Button
                    variant="danger"
                    onClick={onEmployeeDelete}
                    value={employee.id}
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
};

const EmptyRow = ({ colSpan, jsxElement }) => {
    return (
        <tr>
            <td colSpan={colSpan}>{jsxElement}</td>
        </tr>
    );
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeFilter: "",
            employees: [],
            isEmployeeLoading: true,
        };
    }

	componentDidMount() {
		this.getEmployees();
	}

    getEmployees = () => {	
		setTimeout(() => {
			this.setState({
				employees,
				isEmployeeLoading: false,
			});
		}, 1500);
    };

    handleSearchEvent = (evt) => {
        const filterValue = evt.target.value;
        let filteredEmployees = [];

        if (filterValue.trim()) {
            filteredEmployees = this.state.employees.filter(
                (employee) =>
                    employee.name.includes(filterValue) ||
                    employee.id.includes(filterValue)
            );
        } else {
            filteredEmployees = employees; // Reset with default values
        }

        this.setState({
            employeeFilter: filterValue,
            employees: filteredEmployees,
        });
    };

    onDeleteEmployee = (evt) => {
        this.setState({
            employees: this.state.employees.filter(
                (employee) => employee.id !== evt.target.value
            ),
        });
    };

    render() {
        return (
            <div className="App">
                <Jumbotron>
                    <Container>
                        <h1>Employees</h1>

                        <Form.Group>
                            <Form.Control
                                size="lg"
                                type="text"
                                placeholder="Search by name or id"
                                value={this.state.employeeFilter}
                                onChange={this.handleSearchEvent}
                            />
                        </Form.Group>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employees.length ? (
                                    this.state.employees.map((employee) => {
                                        return (
                                            <EmployeeRow
                                                employee={employee}
                                                onEmployeeDelete={
                                                    this.onDeleteEmployee
                                                }
                                                key={employee.id}
                                            />
                                        );
                                    })
                                ) : (
                                    <EmptyRow
                                        colSpan={4}
                                        jsxElement={
                                            this.state.isEmployeeLoading ? (
                                                <Spinner animation="border" />
                                            ) : (
                                                <span>
                                                    No matching employees !
                                                </span>
                                            )
                                        }
                                    />
                                )}
                            </tbody>
                        </Table>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;
