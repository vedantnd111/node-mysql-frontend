import React, { useState } from 'react';
import { signUpFetch } from '../auth';
import Layout from '../core/Layout'
import ShowError from '../helpers/showError';

// import Menu from '../core/Menu'

const Signup = () => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        error: '',
        success: ''
    });
    const { email, name, password, error,success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }
    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signUpFetch({ name, email, password })
            .then((data) => {
                if (data.error) {
                    console.log(data.error);
                    setValues({ ...values, error: data.error, success: false });
                }
                else {
                    setValues({
                        name: '',
                        email: '',
                        password: '',
                        success: true,
                        error: false
                    })
                }
            })
    }

    function showSuccess(success) {
        return <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <h3>registeration succesful!!</h3>
        </div>
    }
    const signUpForm = () => (
        <form className="form-group">
            <div>
                <label className="text-muted font-weight-bold">Enter Email:</label>
                <input type="email" value={email} onChange={handleChange('email')} className="form-control my-2 border-700" />
            </div>
            <div>
                <label className="text-muted font-weight-bold">Enter Name:</label>
                <input type="name" value={name} onChange={handleChange('name')} className="form-control my-2 border-700" />
            </div>
            <div>
                <label className="text-muted font-weight-bold">Enter password:</label>
                <input type="password" value={password} onChange={handleChange('password')} className="form-control my-2 border-700" />
            </div>
            <button className="btn btn-outline-primary my-2" onClick={clickSubmit}>Sign up</button>
        </form>
    );

    return (
        <div>
            <Layout title="sign up" description="Signup using mail and password" className="container col-md-8 my-4 offset-md-2">
                {showSuccess(success)}
                <ShowError error={error} />
                {signUpForm()}
            </Layout>
        </div>
    )
}

export default Signup
