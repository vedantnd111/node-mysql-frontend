import React from 'react';
import Menu from './Menu';
// import ShowImage from './ShowImage';
import { API } from '../configure';
// import moment from 'moment';
import { Link } from 'react-router-dom';

function RoomPage(props) {
    const id = props.location.query.rid;
    const room = props.location.query;

    return (
        <div className="container-md-fluid">
            <Menu />
            <div className="m-4">
                <h2 style={{ textAlign: "center" }}> {room.hostel_name}</h2>
            </div>
            <div className="row">

                <div className="col-md-5 my-4 mx-2">
                    <img
                        src={`${API}/api/photo/${id}`}
                        alt={room.name}
                        className="product-img mb-3"
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                    />
                </div>
                <div className="col-md-5 m-4">
                    <p className="card-p black-8">
                        <span className="font-weight-bold text-dark">room number: </span>
                        {room.rnumber}</p>
                    <p className="card-p black-8">
                        <span className="font-weight-bold text-dark"> address: </span>
                        {room.address}</p>
                    <p className="card-p black-8">
                        <span className="font-weight-bold text-dark">owner name: </span>
                        {room.owner_name}</p>
                    <p className="card-p black-8">
                        <span className="font-weight-bold text-dark">mobile_number: </span>
                        {room.mobile_number}</p>
                    <p className="card-p black-8">
                        <span className="font-weight-bold text-dark">tenant : </span>
                        {room.tenant === null ? "empty" : room.tenant}</p>
                    <p className="card-p black-10">
                        <span className="font-weight-bold text-dark">price : </span>
                    $ {room.price}</p>
                    <div className="m-4">
                        <Link style={{ color: "black" }} to={{ pathname: '/Buy', query: room }}>
                            <button className="btn btn-outline-primary btn-lg btn-block mt-2 mb-2">
                                Rent now at ${room.price}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default RoomPage
