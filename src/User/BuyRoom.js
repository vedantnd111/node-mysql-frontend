import React, { useState, useEffect } from 'react'
import { isAuthenticated } from '../auth';
import Layout from '../core/Layout';
import DropIn from 'braintree-web-drop-in-react';
import ShowError from '../helpers/showError';
import ShowLoading from '../helpers/ShowLoading';
import { fillingTenant, getBraintreeClientToken, processPayment } from './apiUsers';
import { Link } from 'react-router-dom';
import { API } from '../configure';


function BuyRoom(props) {
    const room = props.location.query;
    const { token, user: { id, name } } = isAuthenticated();

    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        instance: {},
        error: '',
        user_name: ''
    });
    const { loading, error, clientToken, user_name, success } = data;
    const getToken = (userId, token) => {
        getBraintreeClientToken(id, token).then(data => {
            if (data.error) {
                // console.log(data.error);
                setData({ ...data, error: data.error });
            } else {
                // console.log(data);
                setData({ clientToken: data.clientToken });
            }
        });
    };

    useEffect(() => {
        getToken(id, token);
    }, []);

    // method to fill tenant field in  table
    const fillTenant = () => {
        fillingTenant(id, room.rid, token)
            .then((response) => {
                if (response.error) {
                    console.log(response.error);
                }
                else {
                    console.log(response);
                }
            })
    };

    const showCheckout = () => {
        return isAuthenticated() ? (
            <div>{showDropIn()}</div>
        ) : (
                <Link to="/signin">
                    <button className="btn btn-primary">Sign in to checkout</button>
                </Link>
            );
    };

    const buy = () => {
        setData({ loading: true });
        // send the nonce to your server
        // nonce = data.instance.requestPaymentMethod()
        let nonce;
        // console.log("data ",data);
        let getNonce = data.instance
            .requestPaymentMethod()
            .then(data => {
                // console.log(data);
                nonce = data.nonce;
                // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
                // and also total to be charged
                // console.log(
                //     "send nonce and total to process: ",
                //     nonce,
                //     getTotal(products)
                // );
                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: room.price
                };

                processPayment(isAuthenticated().user.id, token, paymentData)
                    .then(response => {
                        // console.log("response ", response);
                        setData({ ...data, success: response.success });
                        if (response.success) {
                            fillTenant();
                        }
                        // empty cart
                        // create order

                        // const createOrderData = {
                        //     products: products,
                        //     transaction_id: response.transaction.id,
                        //     amount: response.transaction.amount,
                        //     address: deliveryAddress
                        // };

                        // createOrder(userId, token, createOrderData)
                        //     .then(response => {
                        //         emptyCart(() => {
                        //             setRun(!run); // run useEffect in parent Cart
                        //             console.log('payment success and empty cart');
                        //             setData({
                        //                 loading: false,
                        //                 success: true
                        //             });
                        //         });
                        //     })
                        //     .catch(error => {
                        //         console.log(error);
                        //         setData({ loading: false });
                        //     });
                    })
                    .catch(error => {
                        console.log(error);
                        setData({ loading: false });
                    });
            })
            .catch(error => {
                // console.log("dropin error: ", error);
                setData({ ...data, error: error.message });
            });
    };

    const showDropIn = () => (
        <div onBlur={() => setData({ ...data, error: '' })} className="col-md-6">
            {data.clientToken !== null && room.tenant === null ? (
                <div>
                    {/* <div className="gorm-group mb-3">
                         <label className="text-muted">Delivery address:</label>
                         <textarea
                             onChange={handleAddress}
                             className="form-control"
                             value={data.address}
                             placeholder="Type your delivery address here..."
                         />
                     </div> */}

                    <DropIn
                        options={{
                            authorization: data.clientToken,
                            // paypal: {
                            //     flow: 'vault'
                            // }
                        }}
                        onInstance={instance => (data.instance = instance)}
                    />
                    <button onClick={buy} className="btn btn-success btn-block">
                        Pay
                    </button>
                </div>
            ) : null}
        </div>
    );

    const showSuccess = (success) => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <h3> Transaction succesful!!</h3>
        </div>
    );


    return (
        <Layout title={`Hey ${name}!! Buy rooms here!`} description="Pay rent here with your method of convinience" className="container">
            <div>
                <h2 style={{ textAlign: "center" }}>Hostel Name: {room.hostel_name}</h2>
                <h4 style={{ textAlign: "center" }}>Total: ${room.price}</h4>
                <ShowError error={error} />
                {/* <ShowLoading loading={loading} /> */}
                {showSuccess(success)}
                <div className="row justify-content-center">
                    <div className="col-md-4  my-4">
                        <img
                            src={`${API}/api/photo/${room.rid}`}
                            alt={room.name}
                            className="product-img mb-3"
                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                        />
                    </div>
                    <div className="col-md-7 m-2">
                        {showCheckout()}
                    </div>
                </div>

            </div>
        </Layout>
    );
}


export default BuyRoom
