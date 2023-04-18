import React from "react";

export default class Myform extends React.Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    //event of handel submit to get data & process to back

    handleSubmit(e) {
        e.preventDefault();
        //logic to process the data
        //JSON Object 

        const formData = {};
        for (const fields in this.refs) {
            console.log(fields);
            formData[fields] = this.refs[fields].value;

        }

        console.log("<---Form Data--->" + JSON.stringify(formData));

        // post this data in back end with various API calls 
        // Promise//Axios // Fecth etc.
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <input ref="phone" className="phone" type="tel" name="phone"></input>
                    <input ref="email" className="email" type="email" name="email"></input>
                    <button>submit</button>

                </form>


            </div>
        )
    }
}