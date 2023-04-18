import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:7000/";

class EmployeeService {

    getUsers(){
        console.log("**Service Get User Service");
        return axios.get(EMPLOYEE_API_BASE_URL + "users/list/");
    }

    // getUserById(employeeId){
    //     return axios.get(EMPLOYEE_API_BASE_URL + 'users/get/' + employeeId);
    // }


    deleteUser(employeeId){
        console.log("**Service deleteEmployee ID:- " + employeeId);
        return axios.delete(EMPLOYEE_API_BASE_URL + 'users/delete/' + employeeId);
    }

}

export default new EmployeeService()