import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import AdminDashboard from '../Admin/AdminDashboard';
import UserDashboard from '../User/UserDashboard';
import AboutUs from './AboutUs';
import Signin from './Signin';
import Signup from './Signup';
import CreateRoom from '../Admin/CreateRoom';
import AdminRoutes from '../auth/AdminRoutes';
import PrivateRoutes from '../auth/PrivateRoutes';
import { signout } from '../auth';

const Routes = () => (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} />
        <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
        <Route path="/aboutus" exact component={AboutUs}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/signup" exact component={Signup}/>
        <AdminRoutes path="/create/room" exact component={CreateRoom}/>
        <PrivateRoutes path="/signout" exact component={signout} />
    </BrowserRouter>
);

export default Routes