import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { authenticate, isAuthenticated, signInFetch } from '../auth';
import Layout from '../core/Layout'
import ShowError from '../helpers/showError';
import ShowLoading from '../helpers/ShowLoading';

const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, error, loading, redirectToReferrer } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clickSubmit = event => {
        event.preventDefault();
        signInFetch({ email, password })
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                    setValues({ ...values, error: data.error, loading: false });
                }
                else {
                    authenticate(data, () => {
                        setValues({ ...values, redirectToReferrer: true });
                    })
                }
            })
    }
    const redirectTo = () => {
        if (redirectToReferrer) {
            return <Redirect to="/" />
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }

    }

    const signinForm = () => (
        <form className="form-group">
            <div>
                <label className="text-muted font-weight-bold">Enter email:</label>
                <input type="email" value={email} onChange={handleChange('email')} className="form-control" />
            </div>
            <div>
                <label className="text-muted font-weight-bold">Enter password:</label>
                <input type="password" value={password} onChange={handleChange('password')} className="form-control" />
            </div>
            <button className="btn btn-outline-primary my-2" onClick={clickSubmit}>signin</button>
        </form>
    );
    return (
        <div>
            <Layout title="sign in" description="signin mail and password" className="container col-md-8 my-4 offset-md-2">
                <ShowError error={error} />
                <ShowLoading loading={loading} />
                {redirectTo()}
                {signinForm()}
            </Layout>
        </div>
    )
}

export default Signin
