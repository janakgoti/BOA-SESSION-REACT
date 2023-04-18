import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute }
    from 'react-router';

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <h1>Router of App</h1>

                <Link to="home">Home!</Link>
                {/* <Link to="employeemgmt">Employee Mgmt !</Link>
                <Link to="UserManagement">User Mgmt !</Link>
                <Link to="StateManagement">State Claim !</Link> */}

                {this.props.children}  // render the Child comp./ Component
            </div>
        )
    }
}

export default AppRouter;
