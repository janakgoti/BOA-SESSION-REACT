import React from "react";
import EmployeeName from "./MyComponentOne.jsx";

class Employee extends React.Component {

    render() {

        return (
            <div>
                
                <p>City: {this.props.emp.city}</p>

                <EmployeeName empname={this.props.emp.name}></EmployeeName>
            </div>
        )
    }
}

export default Employee;