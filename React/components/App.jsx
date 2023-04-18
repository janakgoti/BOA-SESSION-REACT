import React from 'react';

// THe mening of SFC component is combination of JS + CSS + HTML
//Class component with SFC(Singal File Component)
class App extends React.Component {
    render() {


        //Array of object

        let companies = ['company 1', 'BOA', 'IBM', 'TCS'];

        let myStyle = {
            fontSize: 20,
            color: '#FF0000'

        }
        return (
            <div>


                <p style={myStyle}>My First React Application</p>
                <p>{2 + 3 + 4}</p>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>

                <ul>
                    {companies.map(function (company, index) {
                        return <li key={index}>{company}</li>
                    })}

                </ul>

            </div>
        );
    }
}

export default App;