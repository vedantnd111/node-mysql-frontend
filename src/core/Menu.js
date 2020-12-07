import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../menu.css';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" }
    }
    return { color: "#ffffff" };
}

const Menu = ({history}) => {
    return (<div>
        <ul className="nav nav-tabs sticky-top">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">
                    Home
                 </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"  style={isActive(history, '/user/dashboard')} to="/user/dashboard">
                    Dashboard
             </Link>

            </li>
            <li className="nav-item">
                <Link className="nav-link"  style={isActive(history, '/aboutus')} to="/aboutus">
                    About us
                 </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link nav-light"  style={isActive(history, '/signin')} to="/signin">
                    sign in
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link nav-light"  style={isActive(history, '/signup')} to="/signup">
                    sign up
                </Link>
            </li>

        </ul>

    </div>
    );
}

export default withRouter(Menu)
