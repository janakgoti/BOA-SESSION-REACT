import React from "react";
import { Button } from "react-bootstrap";


let mycustArray = [];
export default class Customers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            //property data Array
            data: []
        }
        this.customerSubmit = this.customerSubmit.bind(this);
        //this.removeItem = this.removeItem.bind(this);
    };

    //evetn 

    customerSubmit(e) {
        e.preventDefault();

        // console.log(this.state);
        const customerformData = {};
        for (const fields in this.refs) {
            console.log(fields);
            customerformData[fields] = this.refs[fields].value;

        }
        console.log("<---Form Data abc--->" + JSON.stringify(customerformData));
        mycustArray = this.state.data;
        mycustArray.push(customerformData);
        this.setState({ data: mycustArray });

    };

    removeItem(id) {

        // console.log("removeItem:--> " + id);
        // mycustArray.splice(index, 1);
        // this.setState({ data: mycustArray });
        // mycustArray = mycustArray.slice(id,0);
        // console.log(mycustArray);

        var array = mycustArray; // make a separate copy of the array
        var index = array.findIndex(x => x.id == id);
        console.log(index);
        if (index !== -1) {
            console.log("inside IF");
            //array.splice(index, 1);
            //this.setState({data: array});
        }
    }


    render() {

        return (

            <div>
                <form>
                    <input ref="id" className="id" type="id" name="id"></input>
                    <input ref="name" className="name" type="name" name="name"></input>
                    <input ref="add" className="add" type="add" name="add"></input>
                    <button onClick={this.customerSubmit}>submit</button>
                </form>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>add</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {mycustArray.map((customer, index) => {
                                return (
                                    <tr key={index}>
                                        <td >{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.add}</td>
                                        <td>
                                            <button >Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={this.removeItem(customer.id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}