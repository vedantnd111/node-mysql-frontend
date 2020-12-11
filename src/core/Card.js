import ShowImage from './ShowImage';
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
// import moment from 'moment';

function Card({ room }) {

    const id=room.rid;

    const redirectToDetails = () => (
        <Link to={{ pathname: "/Roompage", query:  room  }}>
            <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View details</button>
        </Link>);

    return (
        <div className="card">
            <div className="card-header card-header-l">
                <span className="font-weight-bold text-dark">hostel name: </span>
                {room.hostel_name}</div>
            <div className="card-body">
                <ShowImage item={room} id={id} />
                <p className="card-p black-8">
                    <span className="font-weight-bold text-dark">room number: </span>
                    {room.rnumber}</p>
                <p className="card-p black-8">
                    <span className="font-weight-bold text-dark"> address: </span>
                    {room.address.substring(0, 10)}</p>
                <p className="card-p black-8">
                    <span className="font-weight-bold text-dark">owner name: </span>
                    {room.owner_name.substring(0, 5)}</p>
                <p className="card-p black-8">
                    <span className="font-weight-bold text-dark">mobile_number: </span>
                    {room.mobile_number}</p>
                <p className="card-p black-8">
                    <span className="font-weight-bold text-dark">tenant : </span>
                    {room.tenant === null ? "empty" : room.tenant}</p>
                <p className="card-p black-10">
                    <span className="font-weight-bold text-dark">price : </span>
                    $ {room.price}</p>
                {/* <p className="black-8">Added on {moment(room.date).fromNow()}</p> */}
                {redirectToDetails()}

            </div>

        </div>
    )
}

export default Card
