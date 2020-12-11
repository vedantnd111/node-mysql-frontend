import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../menu.css';
import { isAuthenticated, signout } from '../auth';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" }
    }
    return { color: "#ffffff" };
}

const Menu = ({ history }) => {
    return (<div>
        <ul className="nav nav-tabs sticky-top">
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/')} to="/">
                    Home
                 </Link>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 0 && <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">
                    Dashboard
             </Link>

            </li>}
            {isAuthenticated() && isAuthenticated().user.role === 1 && <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">
                    Dashboard
             </Link>

            </li>}
            {!isAuthenticated() && <Fragment>
                <li className="nav-item">
                    <Link className="nav-link nav-light" style={isActive(history, '/signin')} to="/signin">
                        sign in
                </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link nav-light" style={isActive(history, '/signup')} to="/signup">
                        sign up
                </Link>
                </li>
            </Fragment>}
            <li className="nav-item">
                <Link className="nav-link" style={isActive(history, '/aboutus')} to="/aboutus">
                    About us
                 </Link>
            </li>
            {isAuthenticated() && <li className="nav-item">
                <Link className="nav-link nav-light" style={isActive(history, '/signout')} to="/signout" onClick={() => {
                    signout(() => { history.push('/') })
                }}>
                    sign out
                </Link>
            </li>}



        </ul>

    </div>
    );
}

export default withRouter(Menu)
