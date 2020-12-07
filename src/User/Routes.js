import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AdminDashboard from '../Admin/AdminDashboard';
import UserDashboard from '../User/UserDashboard';
import AboutUs from './AboutUs';
import Signin from './Signin';
import Signup from './Signup';
import CreateRoom from '../Admin/CreateRoom';

const Routes = () => (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/aboutus" exact component={AboutUs}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/create/room" exact component={CreateRoom}/>
    </BrowserRouter>
);

export default Routes