import React from "react";
import { Button } from "react-bootstrap";

class CustomerForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            // properties // data array
            data: [],
            buttonText: 'Submit'
        }

        // bind the event using this statement in React with bind function
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.addCustomer = this.addCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.test = this.test.bind(this);
    };



    handleSubmit(e) {
        e.preventDefault();
        const formData = {};
        let myArray = [];

        for (const fields in this.refs) {

            console.log(fields);
            formData[fields] = this.refs[fields].value;
            myArray = this.state.data;


        }
        if (this.state.buttonText == "Submit") {
            // logic to process the data
            // JSON Array 

            myArray.push(JSON.parse(JSON.stringify(formData)));

            this.setState({ data: myArray });

            console.log('My Array added =>' + myArray);

            this.refs.id.value = '';
            this.refs.name.value = '';
            this.refs.address.value = '';
        }
        else if (this.state.buttonText == "Update") {
            // let modifyObject = JSON.parse(JSON.stringify(formData));
            let modifyObject = myArray.find(a => a.id == formData.id);
            modifyObject.name = formData.name;
            modifyObject.address = formData.address;
            this.setState({ data: myArray });
            this.setState({ buttonText: 'Submit' });

        }




        //console.log("--> form Data-->" + JSON.stringify(formData));

        // post this data in back end with various API calls 
        // Promise//Axios // Fecth etc.
    }

    addCustomer() {

        console.log(this.state);
        // hard coded date object // JSON Object from API 
        let item = "SetTimeUpdate--> " + Date.now();
        let myArray = this.state.data;
        myArray.push(item);
        this.setState({ data: myArray });

        console.log('Added => ' + myArray);
        //JSON.parse(JSON.stringify(myArray));

    }

    deleteCustomer(customer) {
        //this.state.data.splice(customer);
        let myArray = this.state.data;
        myArray.splice(myArray.indexOf(customer), 1);
        this.setState({ data: myArray });
        this.refs.id.value = '';
        this.refs.name.value = '';
        this.refs.address.value = '';
        console.log('delete called =>' + customer);
    }



    editCustomer(customer) {

        let myArray = this.state.data;
        this.refs.id.value = customer.id
        this.refs.name.value = customer.name;
        this.refs.address.value = customer.address;
        //this.state.buttonText = "Update";
        this.setState({ buttonText: 'Update' });
        console.log('Edit called =>' + customer);
    }

    test(row) {
        // const song = e.target.getAttribute('data-item');
        // console.log('We need to get the details for ', song);
        console.log('test called');
    }


    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                        <div className="row">
                                <h1>Customer Details</h1>
                            </div>
                            <label >Id </label>
                            <input ref="id" className="id" type='number' name='id'></input>
                        </div>
                        <div className="row">
                            <label >Name </label>
                            <input ref="name" className="name" type='text' name='name'></input>
                        </div>
                        <div className="row">
                            <label >Address </label>
                            <input ref="address" className="address" type='text' name='address'></input>
                        </div>
                        <div className="row">
                            <button className="btn btn-primary" ref="submit">{this.state.buttonText}</button>
                        </div>

                    </div>

                </form>

                {/* <button onClick={this.test}>Test</button> */}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td scope="col">ID</td>
                            <td scope="col">Name</td>
                            <td scope="col">Address</td>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            this.state.data.map(function (custo, index) {
                                return <tr key={index}><td>{custo.id}</td><td>{custo.name}</td><td>{custo.address}</td>
                                        <td><button id={custo.id}>Edit</button></td>
                                        <td><button key={custo.id}  onClick={this.test} data-item={custo}>Delete</button></td></tr>
                            })
                        } */}
                        {
                            this.state.data.map(custo => {
                                return <tr key={custo.id}><td>{custo.id}</td><td>{custo.name}</td><td>{custo.address}</td>
                                    <td><button key={custo.id} onClick={() => this.editCustomer(custo)} className="btn btn-secondary">Edit</button></td>
                                    <td><button key={custo.id} onClick={() => this.deleteCustomer(custo)} className="btn btn-danger">Delete</button></td></tr>
                            })
                        }

                    </tbody>
                </table>







            </div>
        );
    }

}

export default CustomerForm;