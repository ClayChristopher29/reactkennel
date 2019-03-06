import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            <h1>Employees</h1>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <h5>{employee.name}</h5>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList