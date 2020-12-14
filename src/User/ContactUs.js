import React from 'react';
import Menu from '../core/Menu';

function ContactUs() {
    return (
        <div className="container-md">
            <Menu />
            <div className="container col-md-5 my-5">
                <form className="form-group">
                    <div>
                        <label className="text-muted font-weight-bold">Enter topic of query:</label>
                        <input type="text" className="form-control my-2 border-700" />
                    </div>
                    <div>
                        <label className="text-muted font-weight-bold">Enter your queries:</label>
                        <textarea className="form-control my-2 border-700" />
                    </div>
                    <div className="col-md-12 text-center">
                    <button className="btn btn-outline-primary my-2" >Contact us</button>
                    </div>

                </form>
                </div>
        </div>
    )
}

export default ContactUs

