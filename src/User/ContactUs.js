import React from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';

function ContactUs() {
    
    return (
        <Layout title="Contact us" description="send us your queries here!" className="container">
            <div className="container col-md-5 my-5">
                <form className="form-group">
                    <div>
                        <label className="text-muted font-weight-bold">Enter topic of query:</label>
                        <input type="text" className="form-control my-2" />
                    </div>
                    <div>
                        <label className="text-muted font-weight-bold">Enter your queries:</label>
                        <textarea className="form-control my-2" />
                    </div>
                    <div className="col-md-12 text-center">
                    <button className="btn btn-outline-primary my-2" >
                        {isAuthenticated() ?"Contact us":"Please Signin"}</button>
                    </div>

                </form>
                </div>
        </Layout>
    )
}

export default ContactUs

