import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout';
import { fetchAllRooms } from './apiUsers';
import Card from '../core/Card';
import ShowError from '../helpers/showError';
import { isAuthenticated } from '../auth';
import { listAll } from '../Admin/apiAdmin';

const Home = () => {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState('');
    let role = "";
    // let token = "";
    // let id;
    if (isAuthenticated()) {
        // token = isAuthenticated().token;
        // id = isAuthenticated().user.id;
        if (isAuthenticated().user.role === 1) {
            role = "admin";

        }
        else {
            role = "user";
        }
    }

    const loadRooms = () => {
        if (role === "admin") {
            listAll().then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setRooms(data);
                }
            })
        }
        else {
            fetchAllRooms().then(data => {
                if (data.error) {
                    setError(data.error);
                }
                else {
                    setRooms(data);
                }
            });
        }
    }
    useEffect(() => {
        loadRooms();
    }, []);
    return (
        <Layout title="Home" description="WELCOME TO HOME PAGE!!" className="container-fluid">
            <div className="row">
                <ShowError error={error} />
                {
                    rooms.map((room, i) => (
                        <div className="col-4 mb-3">
                            <Card room={room} />
                        </div>
                    ))
                }
            </div>

        </Layout>
    )
}

export default Home
