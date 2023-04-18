import React from "react";
import axios from "axios";
import EmployeeService from "../services/EmployeeService.jsx";

export default class FetchDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.adduser = this.adduser.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        this.deleteuser = this.deleteuser.bind(this);
    }

    adduser(){
        console.log("ADd User");
    //    let newuser =  {
    //         "id": 110,
    //         "first_name": "Janak",
    //         "last_name": "Goti",
    //         "email": "Janka@gmail.com"
    //       }

    //     this.state.users.push({users: newuser});
    this.props.history.push('/add-employee/_add');
    }

    deleteuser(id) {
        console.log("Fetch deleteEmployee ID:- " + id);
        EmployeeService.deleteuser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
        });
    }

    editEmployee(id) {
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount() {

        EmployeeService.getUsers().then((res) => {
            this.setState({ users: res.data });
        });

        // axios.get(`http://localhost:7000/users/list`).then(res => {
        //     const users = res.data;
        //     this.setState({ users });
        // }).catch(function (error) {
        //     console.log('error');
        // })

    };



    render() {

        return (
            <div>
                {/* <ul>{this.state.users.map((user, index) => {
                    return <li key={index}>{user.email}</li>
                })}</ul> */}

                <h2 className="text-center">User List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.adduser}> Add User</button>
                </div>
                <br></br>

                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> First Name</th>
                                <th>  Last Name</th>
                                <th>  Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.first_name} </td>
                                            <td> {user.last_name}</td>
                                            <td> {user.email}</td>
                                            <td>
                                                <button onClick={() => this.edituser(user.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteuser(user.id)} className="btn btn-danger">Delete </button>
                                                {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(users.id)} className="btn btn-info">View </button> */}
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>

        )
    }

}



//


