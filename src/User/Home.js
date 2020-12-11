import React, { useState, useEffect } from 'react'
import Layout from '../core/Layout';
import { fetchAllRooms } from './apiUsers';
import Card from '../core/Card';

const Home = () => {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState('');

    const loadRooms = () => {
        fetchAllRooms().then(data => {
            if (data.error) {
                setError(data.error);
            }
            else {
                setRooms(data);
            }
        });
    }
    useEffect(() => {
        loadRooms();
    }, []);
    return (
        <Layout title="Home" description="WELCOME TO HOME PAGE!!" className="container-fluid">
            <div className="row">
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
