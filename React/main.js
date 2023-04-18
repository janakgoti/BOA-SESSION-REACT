import React from 'react'
import ReactDOM  from 'react-dom'
import App from './components/App.jsx'
import Employee from './components/MyComponentTwo.jsx'
import MyStateComponent from './components/MyStateComponent.jsx'
import Myform from './components/ReactForm.jsx'
import Customers from './components/MyCustomer.jsx'
import Demo from './components/MyFunctional.jsx'
import CustomerForm from './components/MyNewCustomer.jsx'
import FetchDemo from './components/FetchComponent.jsx'
import EmployeeService from './services/EmployeeService.jsx'
import AppRouter from './components/AppRouter.jsx'



//JSON Object 

let emp = { name:"Ram", city: "Ahmedabad" }

 ReactDOM.render(<App name="BOA Training" age="5 Day" />, document.getElementById('app'));

 //ReactDOM.render(<Employee emp={emp}/>, document.getElementById('employee'));

//ReactDOM.render(<MyStateComponent />, document.getElementById('state'));

// ReactDOM.render(<Myform />, document.getElementById('form'));

//ReactDOM.render(<Customers />, document.getElementById('customerform'));

//ReactDOM.render(<CustomerForm />, document.getElementById("Madhancustomerform"));

//ReactDOM.render(<Demo />, document.getElementById('fun'));

//ReactDOM.render(<FetchDemo />, document.getElementById('API'));


//

// Router configuration to map the route 

ReactDOM.render((
    <Router history = {browserHistory}>
    <Route path = "/" component = {AppRouter}>
           <IndexRoute component = {App} />
           <Route path = "home" component = {App} />
         {/*  <Route path = "employeemgmt" component = {MyStateComponent} />
            <Route path = "UserManagement" component= {CustomerForm} />
           <Route path = "StateManagement" component= {MyStateComponent} /> */}
           
    </Route>
   </Router>
   ), document.getElementById('router'));

