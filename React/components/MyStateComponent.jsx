import React from "react";
import { Button } from "react-bootstrap";

export default class MyStateComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //property data Array
            data: []
        }

        //bind the event using the statment in React with BIND function
        this.updateState=this.updateState.bind(this);
    };

    //write the custome evetn in react 

    updateState() {
        console.log(this.state);

        let item = "Set Time Update :- " + Date.now();
        let myArray = this.state.data;
        myArray.push(item);
        this.setState({ data: myArray });
    }


    render() {
        return (

            <div>

                <p>This My State Component Implimation </p>

                <Button variant="primary" onClick={this.updateState}>Update State</Button>
                <p>{this.state.data}</p>


            </div>

        )
    }


}