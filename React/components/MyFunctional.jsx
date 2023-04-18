import React, { useState } from "react";

// CURD 
const Demo = () => {

    //List Add Reacord //DeleteRecord //updateRecord
    const [emps, setEmps] = useState([

        { name: "Jimmy", experience: "11+ Years" },
        { name: "Rohit", experience: "13+ Years" },
        { name: "Umang", experience: "15+ Years" },
    ]);

    // External Event write with no bind 

    const addEmployee = () => {

        // Define the hard coded object here 

        let newEmployee = { name: "Amit", experience: "25+ Years" }

        setEmps([...emps, newEmployee]);

    }

    //update the data in Employee List

    const updateEmployee = () => {
        let index = 0;
        let newEmployee = emps[index];
        newEmployee["name"] = "Modified Ankit";
        emps[index] = newEmployee;
        setEmps([...emps])
    }

    const deleteEmployee = () => {
        //Delete using Splice
        let copy_emp = [...emps];
        copy_emp.splice(0, 1);
        setEmps(copy_emp);
    }


    /// evet write here & bind any with your HTML template 

    return (
        <div>
            <div className="List of Eomplyee">

                {emps.map((emp, index) =>

                (
                    <div key={index}>
                        <p>{emp.name}</p>
                        <p>{emp.experience}</p>
                    </div>
                )

                )}
            </div>
            <button onClick={addEmployee}>Add Records</button>
            <button onClick={updateEmployee}>Update Employee</button>
            <button onClick={deleteEmployee}>Delete Empoyee</button>
        </div>
    )
}

export default Demo;

