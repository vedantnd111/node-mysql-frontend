import React from 'react'
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { Link } from 'react-router-dom';

function UserDashboard() {
    const {  user } = isAuthenticated();
    const { email, name, role } = user;

    const userLinks = () => (
        <div className="card">
            <h4 className="card-header">Admin Links</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link className="nav-link" to="/orders">
                        your orders
                        </Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/orders">
                        update
                        </Link>
                </li>

            </ul>
        </div>

    );

    const userInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">Admin Information</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    {name}
                </li>
                <li className="list-group-item">
                    {email}
                </li>
                <li className="list-group-item">
                    {role === 1 ? "admin" : "Registered User"}
                </li>

            </ul>
        </div>
    );


    return (
        <Layout
            title="User Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-md-3 m-2">{userLinks()}</div>
                <div className="col-md-6 m-2">{userInfo()}</div>
            </div>
        </Layout>
    )
}

export default UserDashboard
