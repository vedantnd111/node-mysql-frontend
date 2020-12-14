import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth/index';
import '../menu.css';

function AdminDashboard() {
    const {  user } = isAuthenticated();
    const { email, name, role } = user;

    const adminLinks = () => (
        <div className="card">
            <h4 className="card-header">Admin Links</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link className="nav-link text-dark" to="/create">
                        Create Room
                        </Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link text-dark" to="/manage">
                        Manage rooms
                        </Link>
                </li>
                {/* <li className="list-group-item">
                    <Link className="nav-link text-dark" to="/orders">
                        View orders
                        </Link>
                </li> */}
                {/* <li className="list-group-item">
                    <Link className="nav-link text-dark" to="/orders">
                        update
                        </Link>
                </li> */}

            </ul>
        </div>

    );

    const adminInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">Admin Information</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    name: {name}
                </li>
                <li className="list-group-item">
                    email: {email}
                </li>
                <li className="list-group-item">
                    {role === 1 ? "admin" : "Registered User"}
                </li>

            </ul>
        </div>
    );


    return (
        <Layout
            title="Admin Dashboard"
            description={`G'day ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-md-3 m-2">{adminLinks()}</div>
                <div className="col-md-6 m-2">{adminInfo()}</div>
            </div>
        </Layout>
    )
}

export default AdminDashboard
