import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import DemoLogin from '../DemoLogin/index'
import SignupFormModal from '../SignupFormPage/index'
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation()
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
    );
     
    } 
    
    else if(location.pathname === '/signup') {
       return null
    } else {
        sessionLinks = (
            <>
                <DemoLogin />
                <LoginFormModal />
                <SignupFormModal />
            </>
        );
    }

    return (
        <ul className="nav_ul">
                {/* <NavLink exact to="/">Home</NavLink> */}
                {isLoaded && sessionLinks}
        </ul>
    );
}

export default Navigation;